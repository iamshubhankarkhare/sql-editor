## Atlan SQL Editor

### Features
* An editor supporting syntax highlighting for SQL
* Editor has 5 dark themes. 
* Editor supports 3 keybindings - default, VIM, emacs.
* Suggestion chips containing commonly used keywords for faster input.
* History box containing previously ran queries. Clicking on a query will input that query in the editor
* History is saved in local storage, so when you visit the site next time, history will be retained.

### Performance
![lighthouse report](https://github.com/iamshubhankarkhare/sql-editor/blob/main/lighthouse_report.png)
* used gzip to compress the build folder
* used lazy loading for code splitting
* used react memo 
* used best practices for better performance
