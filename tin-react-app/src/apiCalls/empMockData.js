export const employeeList = [
    {
        "_id": 1,
        "name": "John",
        "surname": "Smith"
    },
    {
        "_id": 2,
        "name": "Adam",
        "surname": "Johnson"
    },
    {
        "_id": 3,
        "name": "Steve",
        "surname": "Jones"
    }
]

export const employeeDetailsList = [
    {
        "_id": 1,
        "name": "John",
        "surname": "Smith",
        "deptEmp": [
            {
                "_id": 1,
                "dateFrom": "2001-02-01T00:00:00.000Z",
                "dateTo": "2009-02-01T00:00:00.000Z",
                "dept_id": 2,
                "dept_name" : "dept2"
            }
        ]
    },
    {
        "_id": 2,
        "name": "Adam",
        "surname": "Johnson",
        "deptEmp": [
            {
                "_id": 2,
                "dateFrom": "2001-02-01T00:00:00.000Z",
                "dateTo": "2009-02-01T00:00:00.000Z",
                "dept_id": 1,
                "dept_name" : "dept1"
            }
        ]
    }
]