export class Facebook {
	constructor(private _numClicks?: number, private _isClicked?: boolean) {
		this._numClicks = 0;
		this._isClicked = false;
	}

	get numClicks() {
		return this._numClicks;
	}
    
	get isClicked() {
		return this._isClicked;
    }
    
	set isClicked(state: boolean) {
		this._isClicked = state;
	}

	displayLikes() {
		let clickedMessage = `Like is clicked`;
		if (!this._isClicked) {
			clickedMessage = `Like is not clicked`;
		}
		console.log(`Likes: ${this._numClicks} \n${clickedMessage}`);
	}
}
