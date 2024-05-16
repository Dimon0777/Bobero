let click = 0;
let ImageTurn=1;

function White(){
	
	if (click == 0)
	{
		const BackGround = document.getElementsByClassName("Body1");
		for (let i = 0; i < BackGround.length; i++) {
			  BackGround[i].style.backgroundColor = "white";
		}

		const text = document.getElementsByClassName("BorschText");
		for (let i = 0; i < text.length; i++) {
			  text[i].style.color = "black";
		}
		const text1 = document.getElementsByClassName("text");
		for (let i = 0; i < text1.length; i++) {
			  text1[i].style.color = "black";
		}
		click=1;
		
		var tableRow = document.getElementsByClassName("ModeButton");
		for (let i = 0; i < tableRow.length; i++) {
			console.log(tableRow[i].toString());
			tableRow[i].style.backgroundImage = "url('Pictures/ModeButton/moon.jpg')";
		}		   		
	}
	else if (click == 1)
	{
		const BackGround = document.getElementsByClassName("Body1");
		for (let i = 0; i < BackGround.length; i++) {
			  BackGround[i].style.backgroundColor = 434343;
		}

		const text = document.getElementsByClassName("BorschText");
		for (let i = 0; i < text.length; i++) {
			  text[i].style.color = "white";
		}
		const text1 = document.getElementsByClassName("text");
		for (let i = 0; i < text1.length; i++) {
			  text1[i].style.color = "white";
		}
		click=0;
		var tableRow = document.getElementsByClassName("ModeButton");
		for (let i = 0; i < tableRow.length; i++) {
			console.log(tableRow[i].toString());
			tableRow[i].style.backgroundImage = "url('Pictures/ModeButton/sun.jpg')";
		}
	}
	else
	{
		
	}
	
	

}

function Symbols(){
	let pictures = ["Pictures/symbols/11.png","Pictures/symbols/22.png","Pictures/symbols/33.png","Pictures/symbols/44.png"];
	const symbolsPic = document.getElementsByClassName("symbolPic");
	
		for (let i = 0; i < symbolsPic.length; i++) {
			symbolsPic[i].style.width = "0px";

		}
		sleep(200).then(() => {
			for (let i = 0; i < symbolsPic.length; i++) {
				symbolsPic[i].src = pictures[ImageTurn];
			}

			for (let i = 0; i < symbolsPic.length; i++) {
				symbolsPic[i].style.width = "300px";
			}

			ImageTurn++;
			if (ImageTurn > ((pictures.length)-1))
			{
				ImageTurn = 0;
			}
		});
		
}



function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}