export const deeplyNestedObject = {
    a: { 
        b: { 
            c: { 
                d: { 
                    e: { 
                        f: { 
                            g: { 
                                h: { 
                                    i: { 
                                        j: 10 
                                    } 
                                } 
                            } 
                        } 
                    } 
                } 
            } 
        } 
    } 
};

type TempObjType = { name: string; self?: TempObjType };

const tempObj = { name: "circular" } as TempObjType;
tempObj.self = tempObj;
export const circularReference = tempObj;


export const mixedObject = {
    date: new Date(),
    regex: /test/g,
    func: function() { return "Hello!"; },
    arrowFunc: () => "Hello Arrow!",
    nestedArray: [1, [2, [3, [4, [5]]]]],
    nestedObj: { a: { b: { c: { d: { e: 'deep' } } } } }
};

export const largeArray = Array(10000).fill(0).map((_, i) => i);

export const largeObject: { [key: string]: string } = (() => {
    const obj: { [key: string]: string } = {};
    for (let i = 0; i < 10000; i++) {
        obj["key" + i] = "value" + i;
    }
    return obj;
})();

export const combinedObject = {
    largeObj: largeObject,
    largeArray: Array(1000).fill(0).map((_, i) => i),
    nested: {
        a: {
            b: circularReference,
            c: [1, [2, [3, [4, [5, { d: new Date(), e: /regex/g }]]]]],
            f: { g: "deep", h: function() { return "Hello!"; } }
        }
    }
};
