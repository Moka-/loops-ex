# Loops 'Document Viewer' exercise 

## Available Scripts

In the project directory, first run:\
 `npm install`

Then run\
`npm start`\
 to run the project in dev mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Document block JSON stucture
| Field       | Type        |          | Description |
| ----------- | ----------- | -------- | ----------- |
| id          | Unique ID   | Required |
| type        | string      | Required | Supported values: text, image, quote, table, html
| position    | json        | Required | Specificies the location and dimentions of the block on the page. <br/> dsadsa
| title       | string      | Optional | The initial title of the block.
| content     | any         | Optional | The initial title of the block.
| collapsible | boolean     | Optional | Determines wether or not the block would be collapsible
| attributes  | json        | Optional | Additional Optional attributes for specific block types<br/> (image 'src' for example)

### Example block JSON
```json
{
    "id": 1,
    "type": "text",
    "title": "Lorem Ipsum",
    "content": "Lorem ipsum dolor sit amet.",
    "position": {
      "row": 1,
      "column": 1,
      "width": 12,
      "height": 2
    }
  }
  ```
## Specific block type attributes
### Image:
| Field   | Description |
| ------- | ----------- |
| src     | src value for the 'img' tag 
| alt     | alt value for the 'img' tag 
| caption | A caption to display beneath the image