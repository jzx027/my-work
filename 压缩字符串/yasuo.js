var compress = function(chars) {
            let p1 = 0, p2 = 1, str = ''

            while (p1 < chars.length) {
                if (chars[p1] === chars[p2]) {
                    p2++
                } else if (chars[p1] !== chars[p2]) {
                    str += (chars[p1] + (p2 - p1 === 1 ? '' : (p2 - p1)))
                    p1 = p2
                    p2 = p1 + 1
                }
            }
            let len = str.split('').length
            chars.splice(0, len)
            chars.unshift(...str.split(''))
            return len
};