var player = new Clappr.Player(
		{
			/*sources: ['http://185.8.176.227:25461/live/strtester/ap8s9ndf709a8/68.m3u8','http://randomserver.site:2086/crystal/12345/94780','http://185.8.176.227:25461/live/strtester/ap8s9ndf709a8/68.m3u8'],*/
		source: 'http://185.8.176.227:25461/live/strtester/ap8s9ndf709a8/68.m3u8',
		mimeType:"application/x-mpegURL",
		parentId: "#player",
		autoPlay: true,
		loop: true,
		width: '100%',
		height: '100%',
		hideMediaControl: true,
		plugins: [DashShakaPlayback],
		parentId: '#player'
		});