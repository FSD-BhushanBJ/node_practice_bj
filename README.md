This is the API's :- 

1.Get All Campus (Pagination)
API:
"http://localhost:3000/campus?page="
Purpose:
Fetch campus list with pagination (10 records per page).


2.Get Campus by Name
API:
"http://localhost:3000/campus/name/pune"
Purpose:
Fetch campus data using campus name as URL parameter.


3.Get Campus by ID
API:
"http://localhost:3000/campus/1"
Purpose:
Fetch single campus record using integer campus ID.


4.Get Campus by Name and ID
API:
"http://localhost:3000/campus/:campusName/:id"
Purpose:
Fetch campus data using both campus name and campus ID.
