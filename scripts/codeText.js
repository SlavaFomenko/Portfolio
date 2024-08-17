const wordsArrayRu = ['<span class="yellow">&lthello&gt</span>','Приветствую, меня зовут <span class="green">Слава</span> (){','Я','<span class="purple">веб-разработчик</span>!','Каждый','из','<span class="green">моих</span>','<span class="green">проектов</span>','является','шагом','к','освоению','новых','<span class="blue">технологий</span>','и','созданию,','<span class="coral">высококачественного</span>','пользовательского','<span class="blue">опыта</span>!','}'
];

const wordsArrayEn = ['<span class="yellow">&lthello&gt</span>','Welcome, my name is <span class="green">Slava</span> (){','I','am','a','<span class="purple">web-developer</span>!','Each','of','<span class="green">my</span>','<span class="green">projects</span>','is','a','step','towards','mastering','new','<span class="blue">technologies</span>','and','creating,','a','<span class="coral">high-quality</span>','user','<span class="blue">experience</span>!','}'];

window.addEventListener('resize',()=>addContentToCodeBlock(15))

window.addEventListener('storage', function(event) {
	addContentToCodeBlock(15)
});


function addContentToCodeBlock(size) {
	const codeBlock = [...document.getElementsByClassName('code')][0]
	codeBlock.innerHTML=''

	let codeLenght = size
  
	const text = ' <hello> Hello, my name is Khanil() {I am a web-developer and creator of Hars Web Studio I have more than 100 projects using modern technologies and design }';

	const wordsArray = []
	if (localStorage.getItem('language') === 'en') {
		wordsArray.push(...wordsArrayEn)
	} else {
		wordsArray.push(...wordsArrayRu)
	}

	
	for (let i = 0; i < codeLenght; i++) {
		const lineNumber = document.createElement('span');
		lineNumber.classList.add('line_number')
		lineNumber.textContent =  `${i+1}`;
		
		codeBlock.appendChild(lineNumber);
		const line1 = document.createElement('div')
		const line2 = document.createElement('div')
		const line3 = document.createElement('div')
		const empty = document.createElement('div')
		const empty2 = document.createElement('div')
		const empty3 = document.createElement('div')
		const textSpan = document.createElement('span')
		empty.classList.add('empty')
		empty2.classList.add('empty')
		empty3.classList.add('empty')
		line1.classList.add('code_line')
		line2.classList.add('code_line')
		line3.classList.add('code_line')
		textSpan.classList.add('text')
		
		if(i <= 1 || i >= (codeLenght-2)){
			codeBlock.appendChild(empty);
		} else {
			codeBlock.appendChild(line1);
		}
		
		if(i <= 3 || i >= (codeLenght-4)){
			codeBlock.appendChild(empty2);
		} else {
			codeBlock.appendChild(line2);
		}
		if(wordsArray.length!==0 && i >= (codeLenght-6)){
			codeLenght++;
		}

		if(i < 6 || i >= (codeLenght-6)){
			codeBlock.appendChild(empty3);
		} else {
			codeBlock.appendChild(line3);
			
			codeBlock.appendChild(textSpan)
			
			let str = '';
			
			if (wordsArray[0]==='<span class="yellow">&lthello&gt</span>' ){
				str += wordsArray.shift()
				textSpan.innerHTML = '<span class="yellow">&lthello&gt</span>'
				continue
			}
			if (wordsArray[0] === 'Welcome, my name is <span class="green">Slava</span> (){' || wordsArray[0]=== 'Приветствую, меня зовут <span class="green">Слава</span> (){'){
				str += wordsArray.shift()
				textSpan.innerHTML = str
				continue
			}
			if(wordsArray[0] === '}'){
				textSpan.innerHTML = wordsArray.shift()
				continue
			}
			do{

				if(wordsArray.length === 0 ){
					break
				}
				str += wordsArray.shift() + ' '

				if(wordsArray[0]==='Каждый' || wordsArray[0]==='Each'){
					break
				}

			}while(textSpan.offsetWidth > getTextWidth(str) && wordsArray[0] !== '}')
				textSpan.innerHTML = str
				textSpan.classList.add('inner_code')
			}

			codeBlock.appendChild(textSpan)

		}
		console.log(lineNumber.innerText );

		
	}

addContentToCodeBlock(15)
		
function getTextWidth(text, font = '16px Cascadia Code') {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  context.font = font;
  const plainText = text.replace(/<\/?[^>]+>/gi, '');
  const width = context.measureText(plainText).width;
  return width + 150;
}
