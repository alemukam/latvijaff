//1.1. Data about logos - Youtube, Facebook, Instagram
var logos = [{
	name: 'youtube_logo',
	enter: 'yb_night',
	leave: 'yb_day'
}, {
	name: 'facebook_logo',
	enter: 'fb_night',
	leave: 'fb_day'
}, {
	name: 'instagram_logo',
	enter: 'insta_night',
	leave: 'insta_day'
}];

//1.2. Create hover event on changing images
for (var i = 0; i < logos.length; i++) {
	$('img[alt='+ logos[i].name +']').mouseenter(hoverLogos(logos[i].enter));
	$('img[alt='+ logos[i].name +']').mouseleave(hoverLogos(logos[i].leave));
}

function hoverLogos(action) {
	return function() {
		$(this).attr('src', 'img/logos/' + action + '.png');
	}
}

//2.1. Data about the news section
var currentNews = 0;
var news = [{
	Title: 'Super Ball 2017 has returned to Prague',
	Text: '<p>This years final was held in the center of Prague on Jan Palach square, next to the magnificent Opera house. The setup was amazing and the atmosphere was as unique as it usually is in the Super Ball finals. On the final schedule there was the finals of the Female Battles, the finals of Routines and Double routines, and of course the final of the Battles. The wonderful Lorenzo Pinciroli from Da Move crew got a partner host, Petr Cerha, who is a famous media star in Czech republic. The finals were livestreamed to Sporf facebook site and it had tens of thousands of viewers and it was also broadcasted live on Czech national TV.</p>' +
			'<p>The show started with the semifinals of girls Battles, where Liv Cooke and last years winner Kalina went to the final, leaving Cait and Lucia to battle for the third place. In the bronze battle Lucia from Slovakia beated Caitlyn from USA and got a place on the podium once again. In the final Liv Cooke from England was really at her best and didn’t really live chances for Kalina from Poland. Liv Cooke won the girls world championship with her outstanding performance.</p>' +
			'<p>The Routines were really tight this year. Yosshi from Japan was the only one to do a dropless routine out of the five players in the final. Luki from Poland did the first minute of his routine blind folded which impressed the judges. But not even this year there was no routine better than Gautiers from France. Gautier won his sixth Routine world championship in a row. Luki was second and Yosshi was third. In the Double Routines the audience got to witness some amazing actions. In the routine of Yo &amp; Kazane from Japan very unfortunate thing happened when Yo sprained his ankle during the routine. Yo had made it to the top8 but he had to scratch his battle against Emil K&auml;lldoff because the injury was that bad. The amazing Fagerli brothers were unstoppable also this year and they won the Double Routined world championship. The second place went to Japanese Duo Yosshi &amp; Yu-J an the third place went to France for Gautier &amp; Mathieu.</p>' +
			'<p>The Battles were saved to last. On the first round Tobias from Norway was knocked out against Pedrinho from Brazil who made his way all the way to the final. The semifinal between Ricardinho from Brazil and the last years champion Erlend from Norway was perhaps the best battle of the whole competition. The result couldn’t have been tighter as the judges chose Ricardinho to the final with 3-2 votes. In the final there was two Brazilians: Pedrinho and Ricardinho. Pedrinho was taking risks to beat Ricardinho. But Ricardinho was steadier in the final and became the second Brazilian world champion of Super Ball.</p>' +
			'<p>All together Super Ball 2017 was bigger and better than ever before. The level of freestyle was higher and it was easy to see the improvement in the whole event</p>'
},{
	Title: 'Charly finally makes it',
	Text: '<p>Before this competition Charly had had 4 finals of major tournaments, but he had been always one step behind his opponent and had not managed to win. But not this time. Finally, Chalry was able to defeat this omen in the capital of Great Britain. In London.</p>' +
			'<p>On thursday also the two last stages of Battles series were completed before the Saturdays big final. First stage was the additional battles for the seven remaining spots in top32. There were no big surprises. But in the next stage, round of top32, many really good players were knocked out. For example Jordan from Francewho is familiar from amazing routined managed to beat PWG from Norway/Philippines. The craziest battle of all was the battle between Norways Brynjar, who was fourth last year, and Luki from Poland. After the battle the audience gave them a long standing ovation. Luki managed to knock out Brynjar which was a big surprise for many. The player’s who’ll be seen in the top16 are Luca (Ita), Erlend (Nor), Tobias (Nor), Yo (Jap), Kazane (Jap), Tokura (Jap), Käldoff (Swe), Jordan (Fra), Ricardinho (Bra), Pedrinho (Bra), Guzik (Pol), Luki (Pol), Alekseev (Rus), McPro (Rus), Esteban (Mex) and Jesse (Ned).</p>' +
			'<p>Top 16 battles as always were were very intense it the judges had a tough time as there were responsible for the destiny of the competitors who set the crowd on fire. To the final advanced only two - Charly from Argentina and Kosuke from Japan. According to judges and many other freestylers Charly ourperformed Kosuke and won the title of the world champion.</p>' +
			'<p>First launched in 2008, Red Bull Street Style has hosted some of the finest freestyle football talent – including Argentina’s Charly Iacono, France’s Melody Donchet and Britain’s Andrew Henderson – as they competed to be crowned the best on the globe. Henderson was the winner of the male category last time out in Brazil in 2014, when competitors from 44 nations battled for supremacy in Salvador’s historic Pelourinho Square.</p>' +
			'<p>And the rules to Red Bull Street Style? Simple. Two players have got three minutes to impress the judges with their freestyle skills, handing over the ball to their opponent every 30 seconds, with the winner of the round going through to the next stage. That means the competitors will need to pull out their most creative, technical and stylish moves if they want to impress the judging panel and be crowned Red Bull Street Style world champion.</p>'
},{
	Title: 'Everyone comes to Manchester',
	Text: '<p>On September 3, the best freestyle footballers on the continent are facing off at the European Freestyle Football Championships in Manchester. Goal will be there, streaming the whole competition live on Facebook. The European Freestyle Football Championships is an annual competition that sees over 100 of Europe’s best freestyle athletes compete to be crowned number one. This year the competition is being held at Manchester’s Central Convention Complex and includes heats for both men and women as well as a competition for teams of two.</p>' +
			'<p>The sport of freestyle football is now thriving in 106 countries around the world, with some of the most advanced scenes being found in Europe. Poland alone has over 400 athletes doing crazy things with footballs. Last year’s European champion, Norway’s Erlend Fagerli , is coming to Manchester to fight to retain his title. He will be joined by more than 100 athletes from across Europe, including the UK and Ireland’s first professional female freestyler, Liv Cooke , and Poland’s Lukasz Chwieduk , European champion in 2010 and 2013. Norway’s Tobias Brandal Busaet , who won in 2015, will be taking part and hoping to improve on his second-place finish at last year’s Championships. Other confirmed athletes include Norway’s Brynjar Fagerli (brother of reigning champion, Erlend), Maarten van Luit and Jasmijn Janssen from Netherlands, Denmark’s Anders Borg , Northern Ireland’s Jamie Knight , Javi Sanz Aguilar from Spain, Poland’s Szymon Skalski , and Slovakian freestyler Lucia Kevicka.</p>' +
			'<p>The Soccerex Football Festival is a celebration of freestyle and street football and is free to attend. As well as hosting the European Freestyle Football Championships, the festival will also host the World Street Soccer Championships, which will see some of the best street footballers in the world competing in teams of three within a steel cage for the right to be crowned World Champions! Goals are important, but in street football playing with style is paramount. The Soccerex Football Festival is also home to the Skills School Zone with loads of activations, giving amateurs the chance to show off their skills and pick up some new ones while they’re there. Find out more on the festival’s website.</p>' +
			'<p>The main competition takes the form of a battle, which will see a series of head-to-head, one-versus-one rounds of 3 minutes each, whereby each contestant has three rounds of 30 seconds to outperform their opponent. An expert judging panel will be assessing originality, control and difficulty of the moves on show and it is all set to the music played by a live DJ.</p>'
}];

//2.2. Function which changes news
function displayNews(j) {
	$('#news-img-container h1').text(news[j].Title);
	$('#news-img-container img').attr('src', 'img/news/'+ j +'.jpg');
	$('#news-text-container').html(news[j].Text);
	return;
}

//By default the first element is displayed when the document is loaded
displayNews(0);

//2.3. Click events for both of the buttons
$('#news-next').click(function() {
	currentNews++;
	if (currentNews == news.length) currentNews = 0;
	displayNews(currentNews);
});

$('#news-prev').click(function() {
	currentNews--;
	if (currentNews == -1) currentNews = news.length - 1;
	displayNews(currentNews);
});

//3.1. Slider with photos of LatvijaFF
var currentImage = 0;
var smallHeight = -150, bigHeight = -200;
//Initial call when the page is loaded first
applyLatvijaFFImages(currentImage);
//Calling the function on resize (only for the first element)
$(window).on('resize', function() {
	applyPhoto0();
});

//3.2. Button events
$('#latff-next').click(function() {
	currentImage++;
	applyLatvijaFFImages(currentImage);
});

$('#latff-prev').click(function() {
	currentImage--;
	applyLatvijaFFImages(currentImage);
});

//3.3. Functions
//Generate context for all images
function applyLatvijaFFImages() {
	applyPhoto0(); // #photo-0
	$('#photo-1').css('background-position', (currentImage + 1) * bigHeight + 'px 0');
	$('#photo-2').css('background-position', (currentImage + 2) * smallHeight + 'px 0');
	return;
}

//Generate context only for the first image
function applyPhoto0() {
	var w = window.innerWidth;
	if (w >= 800) $('#photo-0').css('background-position', currentImage * smallHeight + 'px 0');
	else $('#photo-0').css('background-position', currentImage * bigHeight + 'px 0');
	return;
}

$(window).on('resize', function() {
	console.log(window.innerWidth);
});