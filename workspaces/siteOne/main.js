// import a CSS module
import classes from './main.css';
import add from 'shared';

export default () => {
  console.log(classes);

  const message = "javascript from siteOne"
  console.log(message)
  const a = 6;
  const b = 6;
  console.log(`${a} + ${b} =`, add(a, b))
  document.getElementById("demo").innerHTML = message + ' ' +  add(a, b);
}
