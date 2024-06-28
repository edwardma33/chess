export default class Piece extends Image {
    constructor (isBlack, peiceType) {
        super();

        this.src = `../public/${isBlack ? 'b' : 'w'}_${peiceType}.png`;
        this.classList.add('piece');
    }
}
