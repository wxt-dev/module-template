export default defineBackground(() => {
  console.log("Hello from background");

  // Call an API provided by the plugin.
  doSomething();
});
