<script lang="typescript">
  import _ from 'lodash';
  //import DateDisplay from './DateDisplay';

  /*
  import {add} from './math';
  console.log('sum =', add(2, 3));
  console.log('sum =', add(2, '3'));
  */

  /*
  function subtract(n1: number, n2: number): number {
    return n1 - n2;
  }
  console.log('difference =', subtract(5, 3));
  //console.log('difference =', subtract(5, '3'));
  */

  let name = 'svelvet tool';
</script>

<h1>Hello, {_.startCase(name)}!</h1>

<label>
  Name
  <input bind:value="{name}" />
</label>

<!--DateDisplay /-->
