$(function() {
	$('html, body').animate({scrollTop: 0}, 400);
	let lineNum = ['first', 'second', 'third'];
	let category = ['#Art', '#Simple', '#Design', '#Minimalism', '#Object', '#Vector'];
	let card = `<div class="card">
					<div class="image">
						<img src="" alt="img">
					</div>
					<div class="hidden-content">
						<div class="icon-box">
							<div class="icon"><i class="fas fa-heart"></i><span></span></div>
							<div class="icon"><i class="fas fa-share-alt"></i></div>
						</div>
						<div class="tag-box"></div>
					</div>
				</div>`;

	for(let i = 0; i < 20; i++) {
		for(let j = 0; j < 3; j++) {

			$('.' + lineNum[j] + '-line').append(card);
			$('.' + lineNum[j] + '-line .card').eq(i).find('.image img').attr('src', 'img/' + lineNum[j] + 'Line/img' + (i + 1) + '.jpg');

			let randomLike = Math.floor(Math.random() * 3500);
			$('.' + lineNum[j] + '-line .card').eq(i).find('.hidden-content .icon-box span').text(randomLike.toLocaleString());
			let randomCategory = Math.floor(Math.random() * 6);
			$('.' + lineNum[j] + '-line .card').eq(i).find('.hidden-content .tag-box').append(`<div class="tag">` + category[randomCategory] + `</div>`);
		}
	}
	$('.icon:first-child').on('click', function() {
		$(this).addClass('likeAction');
	});
});