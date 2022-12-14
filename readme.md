## Getting Started

1. Ensure you have
   - Node.js
   - TypeScript ``` npm i -g typescript ```
   - Code editor - preferably VSCode
2. Clone the parkis_TA repository: ``` git@github.com:dzonasm/parkis_TA.git ```
3. cd parkis_TA
4. code .
5. Open terminal in code editor and install dependencies by running in project root folder ```npm install```
6. In terminal write ```npx wdio run test/wdio.conf.ts``` command to run test

## Naming conventions

*.data files:

- template how to name variable:
```
             ------------------------------------------------------------------------
            |   {page}  | {section} |      {sub-section(s)}     | {element} | {type} |
             ------------------------------------------------------------------------
Examples:
             ------------------------------------------------------------------------
            |  vision   |    Main   |    Header   | Breadcrumb  | Offerings |  Text  |
             ------------------------------------------------------------------------
            |  dental   |    Main   |          Content          |   Title   |  Text  |
             ------------------------------------------------------------------------
```

{page} = vision, dental, healthcare, quizzard...
{section, sub-section} = nav, header, main, sidebar, footer, breadcrumb...
{element} = title, desc, btn, link, icon, img...
{type} = text, name, link...
