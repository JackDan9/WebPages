---
title: jackdan9_python_spider
tags: python, spider, webPage
author: jackdan9
---
# jackdan9_python_spider
## Python Writing Specification:
### Coding:
- If no special circumstances, the document will use UTF-8 encoding;
- PS: File header must added `# -*- coding: utf-8 -*-` code segment;

------

### Code Format:
- **Indentation**:
    - Uniform use of four spaces indentation

- **Line Width**:
    - Try not to exceed 80 characters for each line of code;
    - In special cases it can be sightly more than 80 characters, but not more than 120 characters;
    - **Reasons**:
        - This is helpful when looking at `side-by-side` diffs;
        - Easy to view the code in the console;
        - To long may be a **design flaw**.

- **Quotation marks**:
    - Simply, natural language uses double quotation marks `"..."`, machine labels use single quotes `'...'`, so most of the code should use single quotes `'...'`.
    - *Natural language* - Use double quotation marks `"..."`;
    - Such as the wrong message, in many cases still be unicode, use `u"hello world"`;
    - *Machine identification* - Use single quotes `'...'`;
    - Such as the key in the dictionary;
    - *RegExp Expression* - Use native double quotes `r"..."`;
    - *Document String(ps: docstring)* - Use three double quotes `"""..."""`;

- **Blank Line**:
    - There are two lines between module level functions and class definitions;
    - Blank Lines between class member functions;
    ```
    class A:

        def _init_(self):
            pass

        def hello(self):
            pass


    def main():
        pass
    ```
    - You can use multiple blank lines to separate groups of related functions;
    - Blank line can be used in the function to separate the logic of the code;

------

- **`import` statement**:
- Import statement should be written on the branch;
```
# Right wording
import os
import sys

# Not recommended wording
import sys, os

# Right wording
from subprocess import Popen, PIPE
```
- Import statement should use **absolute** import;
```
# Right wording
from foo.bar import Bar

# Not commended wording
from ..bar import Bar
```