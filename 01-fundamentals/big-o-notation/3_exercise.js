function compressBoxesTwice(boxes, boxes2) {
    boxes.forEach(function(boxes){
        console.log(boxes)
    })

    boxes2.forEach(function(boxes){
        console.log(boxes)
    })
}


// BIG 0(a + b) or n+m because they are not sharing the same parameters
// If they are nested 0(a*b)