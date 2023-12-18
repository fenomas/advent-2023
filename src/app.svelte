<script lang="js">
  var sleep = (ms) => new Promise((r) => setTimeout(r, ms))

  /**
   *
   *    state
   *
   */
  /** @type {Object<string, import('./importer.js').DayData>} */
  var dataByDay = {}
  var dayNumList = []
  var currDay = 'xx'
  var currInput = ''
  var numTestInputs = 1
  var useTestNum = -1
  var catchErrors = true
  var outputs = ['', '']
  var times = ['', '']
  var answersKnownGood = [false, false]

  /**
   *
   *
   *
   *    view and bindings
   *
   *
   *
   */
  function setDay(day = '') {
    if (day) currDay = day
    var dat = dataByDay[currDay]
    numTestInputs = dat.testInputs.length
    if (useTestNum > numTestInputs - 1) useTestNum = numTestInputs - 1
    currInput = useTestNum < 0 ? dat?.input : dat?.testInputs[useTestNum]
    runSolutions()
  }

  function onInput(input = '') {
    if (currInput) runSolutions()
  }
  $: onInput(currInput)

  function setInputType(testNum = -1) {
    useTestNum = testNum
    setDay()
  }

  function getOutputRows(str) {
    var lines = String(str || '').split('\n').length
    return Math.min(lines, Math.max(lines, 1, 10))
  }

  /**
   *
   *
   *
   *    module running logic
   *
   *
   *
   */

  var busy = false
  async function runSolutions() {
    if (busy) return
    busy = true
    outputs = ['', '']
    times = ['', '']
    await sleep(10)
    for (var part = 1; part <= 2; part++) {
      var [out, dt] = getSolutionOutput(currDay, part, currInput)
      var good = outputIsKnownGood(currDay, part, out, useTestNum)
      renderOutput(part, out, dt, good)
      await sleep(1)
    }
    busy = false
  }

  function getSolutionOutput(day = '', part = 1, input = '') {
    var fn = (dataByDay[day] || {})['part' + part]
    if (!fn) return ['', -999]
    var t0 = performance.now()
    if (!catchErrors) {
      return [fn(input), performance.now() - t0]
    } else {
      try {
        return [fn(input), performance.now() - t0]
      } catch (err) {
        var out = String(err)
        var re = /:(\d+:\d+)\)/.exec(err.stack || '')
        if (re) out = `(${re[1]}) ${out}`
        return [out, performance.now() - t0]
      }
    }
  }

  function renderOutput(part = 1, output = '', time = 0, good = false) {
    outputs[part - 1] = output
    times[part - 1] = time < 0 ? '' : `(${Math.round(time)}ms)`
    outputs = outputs
    times = times
    answersKnownGood[part - 1] = good
    answersKnownGood = answersKnownGood
  }

  async function runAllSolutions() {
    if (busy) return
    busy = true
    var strs = ['', '']
    var dts = [0, 0]
    var allGood = [true, true]
    useTestNum = -1
    currInput = ''
    await sleep(10)
    // run all cases in sequence
    for (var i = 0; i < dayNumList.length; i++) {
      var dayStr = dayNumList[i]
      var dat = dataByDay[dayStr]
      for (var part = 1; part < 3; part++) {
        var input = dat?.input
        var [out, dt] = getSolutionOutput(dayStr, part, input || '')
        var isGood = dt >= 0 && outputIsKnownGood(dayStr, part, out)
        allGood[part - 1] &&= isGood
        strs[part - 1] += isGood ? '★' : 'ー'
        if (dt >= 0) dts[part - 1] += dt
        renderOutput(part, strs[part - 1], dts[part - 1], allGood[part - 1])
        await sleep(1)
      }
    }
    answersKnownGood = allGood
    busy = false
  }

  function outputIsKnownGood(day = '', part = 1, output = '', testNum = -1) {
    var known = dataByDay[day]?.knownAnswers || []
    var ix = 2 + 2 * testNum + (part === 1 ? 0 : 1)
    var ans = String(known[ix] || '')
    return !!(ans && ans === String(output))
  }

  /**
   *
   *
   *
   *    imports and HMR
   *
   *
   *
   */
  var onDataImport = (mod, init) => {
    if (!mod || !mod.getDataByDay) return
    dataByDay = mod.getDataByDay()
    dayNumList = Object.keys(dataByDay)
      .filter((day) => !!dataByDay[day].part1)
      .sort()
    setDay(init ? dayNumList.at(-1) : '')
  }
  if (import.meta.hot) {
    import.meta.hot.accept('./importer.js', (mod) => onDataImport(mod, false))
  }
  import * as importedMod from './importer.js'
  onDataImport(importedMod, true)
</script>

<!-- 







-->
<div class="outer">
  <h2>Advent 2023</h2>
  <div class="layout">
    <div class="label">
      <h4>Days:</h4>
    </div>
    <div class="day-list">
      {#each dayNumList as day}
        <button
          class="button"
          class:current={day === currDay}
          on:keydown={null}
          on:click={() => setDay(day)}>{day}</button
        >
      {/each}
      {#if dayNumList.length > 1}
        <button
          class="button run-all-button"
          on:keydown={null}
          on:click={runAllSolutions}>run all</button
        >
      {/if}
    </div>

    <div class="label">
      <h4>Part 1:</h4>
      <div class="time">{times[0]}</div>
    </div>
    <textarea
      name="output1"
      id="output1"
      bind:value={outputs[0]}
      class:known-good={answersKnownGood[0]}
      rows={getOutputRows(outputs[0])}
    />

    <div class="label">
      <h4>Part 2:</h4>
      <div class="time">{times[1]}</div>
    </div>
    <textarea
      name="output2"
      id="output2"
      bind:value={outputs[1]}
      class:known-good={answersKnownGood[1]}
      rows={getOutputRows(outputs[1])}
    />

    <div class="label" style="align-self: flex-start;">
      <h4>Input:</h4>
      <br />
      <button
        class="button input-toggle"
        class:current={useTestNum === -1}
        on:keydown={null}
        on:click={() => setInputType(-1)}>Real</button
      >
      {#each { length: numTestInputs } as _, i}
        <button
          class="button input-toggle"
          class:current={useTestNum === i}
          on:keydown={null}
          on:click={() => setInputType(i)}>Test {i + 1}</button
        >
      {/each}
    </div>
    <textarea name="input" id="input" bind:value={currInput} rows="14" />
    <div />
    <div class="catch-area">
      Catch errors
      <button
        class="button input-toggle catch-button"
        class:current={catchErrors}
        on:keydown={null}
        on:click={() => {
          catchErrors = !catchErrors
        }}>x</button
      >
    </div>
  </div>
</div>

<!-- 


-->
<style lang="css">
  .outer {
    padding: 0;
    margin: 3em auto;
    width: 90%;
    min-width: 20em;
    max-width: 34em;
  }

  .layout {
    display: grid;
    grid-template: auto / max-content 1fr;
    align-items: center;
    justify-items: flex-start;
    gap: 0.6em;
  }

  .label {
    min-width: 4rem;
    margin: 0.7em;
  }
  .label > h4 {
    margin: 0;
  }

  .button {
    display: inline-block;
    font-size: inherit;
    margin: 0.2em;
    border-radius: 5px;
    padding: 4px 0.4em 3px;
    cursor: pointer;
    color: #090;
    border: solid 1px #090;
    background-color: transparent;
  }

  .button:hover {
    box-shadow: 0 0 4px 2px #090;
  }

  .button.current {
    background-color: #090;
    color: #112;
  }

  .input-toggle {
    display: block;
    margin: 0.5em 0 0;
    padding: 2px 0.4em 1px;
  }

  .time {
    font-size: 80%;
    position: absolute;
  }

  textarea {
    font-family: monospace;
    font-size: 110%;
    width: 95%;
    padding: 0.4em;
    border-radius: 5px;
    color: #ccc;
    border-color: #777;
    background-color: #10101a;
  }

  .known-good {
    color: #0a0;
  }

  .catch-area {
    color: #999;
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .catch-button {
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    text-align: center;
    line-height: 1.2em;
    margin: 0.2em 0.5em;
    padding: 0;
  }
  .run-all-button {
    margin-left: 2em;
  }
</style>
