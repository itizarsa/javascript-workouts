var inputArray = [
    {
        id: 1,
        title: "Title 1",
        childrens: [
            {
                id: 2,
                title: "Title 2",
                childrens: [
                    {
                        id: 3,
                        title: "Title 3",
                        childrens: []
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        title: "Title 4",
        childrens: [
            {
                id: 5,
                title: "Title 5",
                childrens: [
                    {
                        id: 6,
                        title: "Title 6",
                        childrens: [
                            {
                                id: 7,
                                title: "Title 7",
                                childrens: [
                                    {
                                        id: 8,
                                        title: "Title 8",
                                        childrens: [
                                            {
                                                id: 9,
                                                title: "Title 9",
                                                childrens: [
                                                    {
                                                        id: 10,
                                                        title: "Title 10",
                                                        childrens: []
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

var outputArray = [];

function flattenArray(myArray) {
    myArray.forEach(element => {
        dict = {
            id: element.id,
            title: element.title,
            childrens: []
        };
        outputArray.push(dict);
        if (element.childrens.length > 0) {
            flattenArray(element.childrens);
        }
    });
}

flattenArray(inputArray);
console.table(outputArray);