Firstly, I created the server side app called reportViewer so I can create an API for the GET methods i need

Secondly, I created a mock data array of 3 inputs instead of using real data 

Thirdly, i created the get method based on a specific URL and can get the desired data by a specific ID. I tested the method based on the ID's in postman and they worked perfectly

Afterwards, I created this angular app which I named secondTask

Moreover, I created a component called report-viewer, a service called report

In addition, in the report-service.ts file, i created aget method using fetch instead of httpClient that fetches the data if found and return an error if not found

Additionally, in the report-viewer.ts file, I created a method that searches the records for a report based on an ID entered by the user. If it is found, it will return a table of the data found. If not found, it will return no data found

Furthermore, in the report-viewer.html file, i created what is need for the data to show after the search according to an ID