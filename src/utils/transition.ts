const appear = (el: HTMLElement) => new Promise((resolve: Function) => {
    let opacity = 0
    let timer = setInterval(() => {
        el.style.opacity = '' + opacity
        if (opacity >= 1) {
            clearInterval(timer)
            resolve()
        }
        opacity += 0.05
    }, 100)
})

const disappear = (el: HTMLElement) => new Promise((resolve: Function) => {
    let opacity = 1
    let timer = setInterval(() => {
        el.style.opacity = '' + opacity
        if (opacity <= 0) {
            clearInterval(timer)
            resolve()
        }
        opacity -= 0.05
    }, 300)
})


const transition = async (el: HTMLElement, appearance: boolean) => {
    if (appearance) {
        await appear(el)
        el.style.display = 'block'
    } else {
        await disappear(el)
        el.style.display = 'none'
    }
}


export default transition