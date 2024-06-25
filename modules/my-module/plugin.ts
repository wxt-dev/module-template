import { defineWxtPlugin } from "wxt/sandbox";

export default <any>defineWxtPlugin(() => {
  console.log("Plugin loaded!", location.href);
  internalValue = Math.random();
});

let internalValue: number;

export function doSomething() {
  console.log("plugin: Internal value =", internalValue);
}
