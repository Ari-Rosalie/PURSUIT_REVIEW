# Reference Types

Primitive types include the following data types:

number
string
boolean
undefined
null
bigInt 
symbol 


All other data types are reference types. This includes objects and arrays, functions, and other datatypes you have not seen yet, like maps and sets.

Primitive and reference types differ because primitive types are immutable while reference types are mutable. This means that primitive types, once created, cannot be changed, although they can be copied. Reference types, on the other hand, can be changed. You will see many examples of what this means below.

## Destructive vs. Non-destructive operations

Destructive operations are those operations that mutate (change) the underlying reference type on which they are called. A destructive method doesn't have to "delete" a value for it to be destructive. Rather, it destroys the original version and replaces it with the new version.

Non-destructive operations
In contrast, non-destructive operations do not mutate the underlying reference.

All methods called on primitive types are non-destructive: they return a new value based on the method called. However, the underlying primitive type stays the same.





Lesson Link [https://github.com/Accelerator-One-Days-Track-1/unit-fundamentals/blob/main/reference-types/readme.md]