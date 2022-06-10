import {
    assertFalse,
    assertExists,
    assertNotStrictEquals,
} from "http://deno.land/std/testing/asserts.ts"

let mentira = false;
let existe = "qualquer coisa";

Deno.test("Detector de mentira", () => {
    assertFalse(mentira); 
})

Deno.test("Ser ou não ser", ()=> {
    assertExists(existe);
})

// Deno.test(), () => {
    
// }