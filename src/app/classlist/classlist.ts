import {Component} from '@angular/core';
import {Http} from '@angular/http';
@Component({
    selector: 'classlist',
    template: require('./classlist.html')
})

export class Classlist {
    classlist = [{
        "uuid": "dba37e6a-2189-11e6-999a-99c5fe4c7969",
        "type": "group",
        "created": 1464078666054,
        "modified": 1464078666054,
        "path": "group1464078666029",
        "category": "class",
        "class": {
            "startdate": "2016-01-20",
            "enddate": "2017-01-25",
            "instructorname": "admin",
            "instructorid": "a946534a-f0ea-11e5-bd33-2f54c5ee62c9"
        },
        "metadata": {
            "connecting": {
                "created": "/users/a83b4bea-f0ea-11e5-83b4-e53e34813d5a/groups/dba37e6a-2189-11e6-999a-99c5fe4c7969/connecting/created"
            },
            "path": "/users/a83b4bea-f0ea-11e5-83b4-e53e34813d5a/groups/dba37e6a-2189-11e6-999a-99c5fe4c7969",
            "sets": {
                "rolenames": "/users/a83b4bea-f0ea-11e5-83b4-e53e34813d5a/groups/dba37e6a-2189-11e6-999a-99c5fe4c7969/roles",
                "permissions": "/users/a83b4bea-f0ea-11e5-83b4-e53e34813d5a/groups/dba37e6a-2189-11e6-999a-99c5fe4c7969/permissions"
            },
            "connections": {
                "has": "/users/a83b4bea-f0ea-11e5-83b4-e53e34813d5a/groups/dba37e6a-2189-11e6-999a-99c5fe4c7969/has"
            },
            "collections": {
                "activities": "/users/a83b4bea-f0ea-11e5-83b4-e53e34813d5a/groups/dba37e6a-2189-11e6-999a-99c5fe4c7969/activities",
                "feed": "/users/a83b4bea-f0ea-11e5-83b4-e53e34813d5a/groups/dba37e6a-2189-11e6-999a-99c5fe4c7969/feed",
                "roles": "/users/a83b4bea-f0ea-11e5-83b4-e53e34813d5a/groups/dba37e6a-2189-11e6-999a-99c5fe4c7969/roles",
                "users": "/users/a83b4bea-f0ea-11e5-83b4-e53e34813d5a/groups/dba37e6a-2189-11e6-999a-99c5fe4c7969/users"
            }
        },
        "title": "PythonVideoDescriptionType1",
        "products": [{
            "uuid": "995a58da-2189-11e6-89df-11a37db7236b",
            "version": "2.0",
            "status": "un-published",
            "title": "Type 1, Test Product",
            "author": "Kunal Chawla",
            "paths": {
                "public-assets": "https://s3.amazonaws.com/comprodls/cdev6/products/VideoDescriptionType1/2.0/assets",
                "secured-assets": ""
            },
            "thumbnaillarge": "cover.jpg",
            "thumbnailsmall": "cover.jpg",
            "schema": 1,
            "productactivitiesid": "50b1e254-21ae-11e6-acaa-037fbc17141a",
            "model": {
                "type": "type-1"
            },
            "code": "VideoDescriptionType1",
            "producttype": "courseware",
            "group": "99559dea-2189-11e6-97c0-b76689633189"
        }],
        "assignments": [],
        "count": 1
    }, {
        "uuid": "5e8400ba-169b-11e6-ab51-038d24b7b1ce",
        "type": "group",
        "created": 1462876724283,
        "modified": 1462876724283,
        "path": "group1462876724252",
        "category": "class",
        "class": {
            "startdate": "2016-01-20",
            "enddate": "2016-12-25",
            "instructorname": "admin",
            "instructorid": "a946534a-f0ea-11e5-bd33-2f54c5ee62c9"
        },
        "metadata": {
            "connecting": {
                "created": "/users/a83b4bea-f0ea-11e5-83b4-e53e34813d5a/groups/5e8400ba-169b-11e6-ab51-038d24b7b1ce/connecting/created"
            },
            "path": "/users/a83b4bea-f0ea-11e5-83b4-e53e34813d5a/groups/5e8400ba-169b-11e6-ab51-038d24b7b1ce",
            "sets": {
                "rolenames": "/users/a83b4bea-f0ea-11e5-83b4-e53e34813d5a/groups/5e8400ba-169b-11e6-ab51-038d24b7b1ce/roles",
                "permissions": "/users/a83b4bea-f0ea-11e5-83b4-e53e34813d5a/groups/5e8400ba-169b-11e6-ab51-038d24b7b1ce/permissions"
            },
            "connections": {
                "has": "/users/a83b4bea-f0ea-11e5-83b4-e53e34813d5a/groups/5e8400ba-169b-11e6-ab51-038d24b7b1ce/has"
            },
            "collections": {
                "activities": "/users/a83b4bea-f0ea-11e5-83b4-e53e34813d5a/groups/5e8400ba-169b-11e6-ab51-038d24b7b1ce/activities",
                "feed": "/users/a83b4bea-f0ea-11e5-83b4-e53e34813d5a/groups/5e8400ba-169b-11e6-ab51-038d24b7b1ce/feed",
                "roles": "/users/a83b4bea-f0ea-11e5-83b4-e53e34813d5a/groups/5e8400ba-169b-11e6-ab51-038d24b7b1ce/roles",
                "users": "/users/a83b4bea-f0ea-11e5-83b4-e53e34813d5a/groups/5e8400ba-169b-11e6-ab51-038d24b7b1ce/users"
            }
        },
        "title": "multiFolderClass",
        "products": [{
            "uuid": "2b57c36a-169c-11e6-a913-a556b6d39c23",
            "version": "9.0",
            "status": "un-published",
            "title": "Basics of Programming, Using Python",
            "author": "Kunal Chawla",
            "paths": {
                "public-assets": "https://s3.amazonaws.com/comprodls/cdev6/products/python-multi-folder-book/9.0/assets",
                "secured-assets": ""
            },
            "thumbnaillarge": "cover.jpg",
            "thumbnailsmall": "cover.jpg",
            "schema": 1,
            "productactivitiesid": "ea7c3d44-2726-11e6-9b84-0daa86297663",
            "code": "python-multi-folder-book",
            "producttype": "courseware",
            "group": "2b53cbd4-169c-11e6-96f1-558be656c0d7"
        }],
        "assignments": [],
        "count": 2
    }, {
        "uuid": "f20ea8fa-03c0-11e6-b92c-9711b40d6ebb",
        "type": "group",
        "created": 1460803791103,
        "modified": 1461934139255,
        "path": "group1460803791087",
        "category": "class",
        "class": {
            "startdate": "2016-05-27",
            "enddate": "2016-05-30",
            "instructorname": "teacher1",
            "instructorid": "a993d714-f0ea-11e5-b316-895221f7d037"
        },
        "metadata": {
            "connecting": {
                "created": "/users/a83b4bea-f0ea-11e5-83b4-e53e34813d5a/groups/f20ea8fa-03c0-11e6-b92c-9711b40d6ebb/connecting/created"
            },
            "path": "/users/a83b4bea-f0ea-11e5-83b4-e53e34813d5a/groups/f20ea8fa-03c0-11e6-b92c-9711b40d6ebb",
            "sets": {
                "rolenames": "/users/a83b4bea-f0ea-11e5-83b4-e53e34813d5a/groups/f20ea8fa-03c0-11e6-b92c-9711b40d6ebb/roles",
                "permissions": "/users/a83b4bea-f0ea-11e5-83b4-e53e34813d5a/groups/f20ea8fa-03c0-11e6-b92c-9711b40d6ebb/permissions"
            },
            "connections": {
                "has": "/users/a83b4bea-f0ea-11e5-83b4-e53e34813d5a/groups/f20ea8fa-03c0-11e6-b92c-9711b40d6ebb/has"
            },
            "collections": {
                "activities": "/users/a83b4bea-f0ea-11e5-83b4-e53e34813d5a/groups/f20ea8fa-03c0-11e6-b92c-9711b40d6ebb/activities",
                "feed": "/users/a83b4bea-f0ea-11e5-83b4-e53e34813d5a/groups/f20ea8fa-03c0-11e6-b92c-9711b40d6ebb/feed",
                "roles": "/users/a83b4bea-f0ea-11e5-83b4-e53e34813d5a/groups/f20ea8fa-03c0-11e6-b92c-9711b40d6ebb/roles",
                "users": "/users/a83b4bea-f0ea-11e5-83b4-e53e34813d5a/groups/f20ea8fa-03c0-11e6-b92c-9711b40d6ebb/users"
            }
        },
        "title": "Class Test superheroes",
        "products": [{
            "uuid": "423bee34-10f3-11e6-a1ce-4358fa445606",
            "version": "3.0",
            "status": "un-published",
            "title": "Superheroes with Tests",
            "author": "Adam Hadwin",
            "paths": {
                "public-assets": "https://s3.amazonaws.com/comprodls/products/SuperheroesWithTest/3.0",
                "secured-assets": ""
            },
            "thumbnaillarge": "cover.jpg",
            "thumbnailsmall": "cover.jpg",
            "schema": 1,
            "productactivitiesid": "bdd4c61a-11c0-11e6-848e-fde693866c45",
            "code": "SuperheroesWithTest",
            "producttype": "courseware",
            "group": "42353774-10f3-11e6-8992-910ee7913bcc"
        }],
        "assignments": [{
            "uuid": "f28a5964-0aaa-11e6-acfc-4360196414ec",
            "type": "assignment",
            "created": 1461564001125,
            "modified": 1461564001125,
            "description": "fdgfd",
            "duedate": "2016-04-30",
            "metadata": {
                "connecting": {
                    "has": "/groups/f20ea8fa-03c0-11e6-b92c-9711b40d6ebb/has/f28a5964-0aaa-11e6-acfc-4360196414ec/connecting/has"
                },
                "path": "/groups/f20ea8fa-03c0-11e6-b92c-9711b40d6ebb/has/f28a5964-0aaa-11e6-acfc-4360196414ec"
            },
            "title": "dfhfg"
        }],
        "count": 1
    }]
    classCount = Object.keys(this.classlist).length;
    colors = ['#4d7da9', '#6e587a', '#71843f', '#c79121', '#57889c'];

}


