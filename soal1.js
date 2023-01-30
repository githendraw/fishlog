function test ()  {
    const result = []
    for(let i = 1; i <= 50; i += 1) {
        if(i % 3 === 0 || i % 5 === 0) {
            if(i%3 === 0) {
                result.push('Frontend')
            }
            if(i%5 === 0) {
                result.push('Backend')
            }
        } else {
            result.push(i)
        }
    }

    return result.join(',')
}

console.log(test())