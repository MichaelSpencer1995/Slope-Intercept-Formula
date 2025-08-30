export default class HtmlAndCssHandler {
    constructor() {
    }
    setTitle() {
        document.title = "Slope Intercept Formula"
    }
    // attachCSS() {
    //     const style = document.createElement("style")
    //     style.innerHTML = `
    //         body {
    //             background: #0f0f0f;
    //         }
    //         #game-container {
    //             display: flex;
    //             flex-direction: column;
    //             align-items: center;
    //             margin-top: 120px;
    //             /* position: relative; */
    //         }
    //         #start-button {
    //             /* position: absolute;
    //             top: 50%;
    //             left: 50%; */
    //         }
    //         #moniter {
    //             display: flex;
    //             border: white 4px solid;
    //         }
    //         #score {
    //             color: #fff;
    //             font-size: 25px;
    //         }
    //     `
    //     document.head.appendChild(style)
    // }
    // attachHTML() {
    //     const root = document.createElement('div')
    //     const gamesContainerDiv = document.createElement('div')
    //     gamesContainerDiv.setAttribute('id', "game-container")

    //     const startButton = document.createElement('button')
    //     startButton.setAttribute('id', 'startButton')
    //     startButton.innerHTML = this.startButtonsText
    //     gamesContainerDiv.appendChild(startButton)
    //     const score = document.createElement('div')
    //     score.setAttribute('id', 'score')
    //     gamesContainerDiv.appendChild(score)
    //     const moniter = document.createElement('div')
    //     moniter.setAttribute('id', 'moniter')
    //     gamesContainerDiv.appendChild(moniter)

    //     root.setAttribute('id', 'root')
    //     root.appendChild(gamesContainerDiv)
    //     document.body.appendChild(root)

    //     if(this.gameSize < 7 || this.gameSize > 31 || this.gameSize % 2 == 0) {
    //         console.error('invalid gameboard size, gameboard size must an odd numbered integer between 7 and 31')
    //         return
    //     }

    //     let matrix = []
    //     for(let i = 0; i < this.gameSize; i++) {
    //     let pixelRowContainer = document.createElement('div')
    //     matrix.push([])
    //         for(let j = 0; j < this.gameSize; j++) {
    //             let pixel = document.createElement('div')
    //             pixel.style.width = this.pixelSize + "px"
    //             pixel.style.height = this.pixelSize + "px"
    //             pixel.style.border = "white 1px solid"
    //             pixelRowContainer.appendChild(pixel)

    //             matrix[i].push({
    //                 color: null
    //             })
    //         }
    //         moniter.appendChild(pixelRowContainer)
    //     }
    //     return matrix
    // }
    // attachStartButtonsEventHandler() {
    //     startButton.addEventListener('click', () => this.startButtonsCallback())
    // }
    main() {
        this.setTitle()
        // this.attachCSS()
        // let matrix = this.attachHTML()
        // this.attachStartButtonsEventHandler()
        // return matrix
    }
}