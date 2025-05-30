use password_manager;

INSERT INTO user
	(userid, email, master_pass, username)
VALUES
(1, 'andymuray', '1234', 'andy'),
(2, 'izumikamasaki@gmail.com', '1234', 'izumi'),
(3, 'izumi@gmail.com', '12345', 'hung'),
(39, 'james@gmail.com', 'jamescurry', 'mynameisjames'),
(100, 'eddie.r@gmail.com', 'E1323232', 'eddiemeeddie'),
(1339, 'linh.nguyen@gmail.com', 'LinhPham12803', 'Linh'),
(1340, 'olivia.johnson1987@gmail.com', '84oDm=MDgr', 'Olivia Johnson'),
(1341, 'luke.murphy1988@gmail.com', 'luke1988', 'Luke Murphy'),
(1342, 'oliver.wilson1987@gmail.com', 'wilson19871239', 'Oliver Wilson'),
(1343, 'emily.adams1992@gmail.com', 'SmileEveryDay!', 'Emily Adams'),
(1344, 'sophia.martinez1993@gmail.com', 'martinez19936789', 'Sophia Martinez'),
(1345, 'abigail.hall1993@gmail.com', 'SunnyDaysForever', 'Abigail Hall'),
(1346, 'wyatt.reed1992@gmail.com', 'nP8#Tj4!Xb2Zm6k', 'Wyatt Reed'),
(1347, 'david.turner1988@gmail.com', 'tY8$LmN3@qW9zP4r', 'David Turner'),
(1348, 'grace.nelson1987@gmail.com', 'cheeseburger', 'Grace Nelson'),
(1349, 'harper.lewis1991@gmail.com', 'youcantguessmypass', 'Harper Lewis'),
(1350, 'lucas.thomas1990@gmail.com', 'thomas19902109', 'Lucas Thomas'),
(1351, 'ella.young1994@gmail.com', 'DreamBig1987', 'Ella Young'),
(1352, 'madison.scott1986@gmail.com', 'SunsetLover_86', 'Madison Scott'),
(1353, 'thisisnottravis@gmail.com', 'cattosjeck', 'travisscottcattosjeck'),
(1354, 'matty.bakes88@gmail.com', 'KeepGoing2010', 'Matthew Baker'),
(1355, 'tori.mitch.adventures@gmail.com', 'AdventureAwaits1', 'Victoria Mitchell'),
(1356, 'thomas.wat@gmail.com', 'usedtoshopatald', 'KanyeWest'),
(1357, 'bakesomecake@gmail.com', 'LifeIsBeautiful', 'Baker'),
(1358, 'finch.found.secret@gmail.com', 'FindTheKey42!', 'Harold Finch'),
(1359, 'dante.voyager@gmail.com', 'V0yage2023!', 'Dante Vega'),
(1360, 'freya.nolan.nova@gmail.co', 'Supernova#', 'Freya Nolan'),
(1361, 'freya.hus.nolan@gmail.co', 'Supernova#2', 'Chris Nolan'),
(1362, 'ez.urban.explorer@gmail.com', 'playedforarsenal', 'Ezekiel Rice');


INSERT INTO vault_entry
  (entryid, app_name, last_modified, password, username, userid)
VALUES
  (2991,'Indeed','2025-05-08 15:46:16.416971','andymurrayprof','Andy Murray',1),
  (23232,'Facebook','2025-05-08 15:47:16.416971','iamatennisplayer','Andy Hurray',1),
  (192, 'LinkedIn','2025-05-08 15:46:16.416971', 'iamatennisplayer', 'Andy Murray', 1),
  (232, 'Facebook','2025-05-08 15:47:16.416971', 'iamatennisplayer', 'Andy Murray', 1),
  (233, 'Twitter','2025-05-08 15:48:16.416971', 'iamatennisplayer', 'a.d.u', 1),
  (234, 'Instagram', '2025-05-08 15:49:16.416971', 'iamatennisplayer', 'andymurray', 1),
  (235, 'GitHub', '2025-05-08 15:50:16.416971', 'iamatennisplayer', 'adu', 1),
  (236, 'Netflix', '2025-05-08 15:51:16.416971', 'iamatennisplayer', 'Andy Murray', 1),
  (237, 'Instagram', '2025-05-08 15:52:16.416971', 'heythisismycloneaccount', 'andyhurray', 1),
  (238, 'AngelList', '2025-05-08 15:53:16.416971', 'iamatennisplayer', 'Andy Murray', 1),
  (239, 'Behance', '2025-05-08 15:54:16.416971', 'iamatennisplayer', 'Andy Murray', 1),
  (240, 'Dribbble', '2025-05-08 15:55:16.416971', 'iamatennisplayer', 'Andy Murray', 1),
  (241, 'Crunchbase','2025-05-08 15:56:16.416971', 'iamatennisplayer', 'Andy Murray', 1),
  
  (242, 'LinkedIn', '2025-05-08 15:46:16.416971', 'jamescurry', 'James Curry', 39),
  (243, 'Facebook', '2025-05-08 15:47:16.416971','jamescurry', 'James Cond', 39),
  (244, 'Twitter','2025-05-08 15:48:16.416971', 'jamescurry', 'mynameisjames', 39),
  (245, 'Instagram','2025-05-08 15:49:16.416971', 'jamescurry', 'mynameisjames', 39),
  (246, 'GitHub','2025-05-08 15:50:16.416971', 'jamescurry', 'mynameisjames', 39),
  
  (1363, 'LinkedIn','2025-05-08 16:00:01.000000', 'LinhPham12803', 'Linh', 1339),
  (1364, 'Facebook','2025-05-08 16:00:02.000000', 'LinhPham12803', 'Linh Nguyen', 1339),
  (1365, 'Twitter', '2025-05-08 16:00:03.000000', 'LinhPham12803', 'Linh', 1339),
  (1366, 'Facebook', '2025-05-08 16:00:04.000000', 'LinhPham12803', 'Linh Pham', 1339),
  
  (1367, 'Apple','2025-05-01 22:01:32.093010', 'martinez19936789', 'Sophia Martinez', 1344),
  (1368, 'Dell', '2025-05-01 23:01:20.001230', 'martinez19936789', 'Sophia Martinez', 1344),
  (1369, 'Samsung','2025-05-01 11:01:10.049203', 'martinez19936789', 'Sophia Martinez', 1344),
  (1370, 'Microsoft','2025-05-01 12:01:12.000214', 'martinez19936789', 'Sophia Martinez', 1344),

  (1371, 'Canva', '2025-05-01 17:11:00.000000', 'SunnyDaysForever', 'Abigail Hall', 1345),
  (1372, 'FragranceWorld', '2025-05-02 16:01:00.000000', 'SunnyDaysForever', 'Abigail Hall', 1345),
  (1373, 'JomaShop', '2025-05-02 14:01:34.232400', 'SunnyDaysForever', 'Abigail Hall', 1345),
  (1374, 'Sephora', '2025-05-02 11:01:00.0123450', 'SunnyDaysForever', 'Abigail Hall', 1345),

  (1375, 'Spotify', '2025-05-02 12:01:00.021330', 'nP8#Tj4!b2Zm6k', 'Wyatt Reed', 1346),
  (1376, 'Airbnb', '2025-05-02 01:01:00.000000', 'nP8#Tj4!XbZm6k', 'Wyatt Reed', 1346),
  (1377, 'Uber', '2025-05-02 09:01:02.000000', 'nP8#Tj4!Xb2Zmk', 'Wyatt Reed', 1346),
  (1378, 'Lyft', '2025-05-02 08:01:03.000000', 'nP8#Tj4!Xb2Zm6', 'Wyatt Reed', 1346),

  (1379, 'Netflix', '2025-05-02 12:01:10.000000', 'tY8$LmN@qW9zP4r', 'David Turner', 1347),
  (1380, 'Hulu', '2025-05-04 10:01:00.000000', 'tY8$LmN3@qW9P4r', 'David Turner', 1347),
  (1381, 'DisneyPlus', '2025-05-04 06:01:20.000000','tY8$LmN3qW9zP4r', 'David Turner', 1347),
  (1382, 'HBO', '2025-05-05 06:01:30.000000', 'tY8$LmN3@qW9zP4', 'David Turner', 1347),

  (1383, 'Etsy','2025-05-05 06:01:40.000000', 'che3eseburger',  'Grace Nelson', 1348),
  (1384, 'Target', '2025-05-05 06:01:50.000000', 'che3eseburger', 'Grace Nelson', 1348),
  (1385, 'HBO','2025-05-05 11:01:10.000000', 'cheseburger', 'Grace Nelson', 1348),
  (1386, 'Netflix', '2025-05-08 16:01:30.000000', 'cheseburger',  'Grace Nelson', 1348),
  
  (1387, 'Zoom', '2025-05-08 16:01:00.000200', 'youcanguessmypass','Harper Lewis', 1349),
  (1388, 'Slack','2025-05-08 16:01:00.000300', 'youcantguessmypass','Harper Lewis', 1349),
  (1389, 'Instagram','2025-05-08 16:01:00.400000', 'youcanguessmypass','Harper Lewis', 1349),
  (1390, 'Amazon', '2025-05-08 16:01:00.005000', 'youcantguessmypass','Harper Lewis', 1349),
  
  (1392, 'Quora', '2025-05-08 16:01:00.000100', 'thomas19902109', 'Lucas Thomas', 1350),
  (1393, 'Medium',  '2025-05-08 16:01:00.300000', 'ts19902109', 'Lucas Thomas', 1350),
  (1394, 'StackOverflow','2025-05-08 16:01:40.000000', 'tomas19902109', 'Lucas Thomas', 1350),
  
  (1395, 'Pinterest','2025-05-08 16:01:00.050000', 'DreamBig1987', 'Ella Young', 1351),
  (1396, 'Tumblr','2025-05-08 16:01:00.000020', 'DreamBig1987', 'Ella Young', 1351),
  (1397, 'Flickr','2025-05-08 16:01:01.000000', 'DreamBig1987', 'Ella Young', 1351),
  (1398, 'Imgur', '2025-05-08 16:01:23.000000', 'DreamBig1987', 'Ella Young', 1351),
  
  (1399, 'Goodreads', '2025-05-08 16:01:00.011000', 'SunsetLover_86', 'Madison Scott', 1352),
  (1400, 'Audible', '2025-05-08 16:01:00.000110', 'SunsetLover_86', 'Madison Scott', 1352),
  (1401, 'Scribd', '2025-05-08 16:01:00.000011', 'SunsetLover_86', 'Madison Scott', 1352),
  (1402, 'Wattpad',  '2025-05-08 16:01:00.001100', 'SunsetLover_86', 'Madison Scott', 1352),
  
  (1403, 'Twitch', '2025-05-08 16:01:00.123400', 'cattosjeck', 'travisscottcattosjeck', 1353),
  (1404, 'YouTube', '2025-05-08 16:01:00.123400', 'cattosjeck', 'travisscottcattosjeck', 1353),
  (1405, 'Vimeo', '2025-05-08 16:01:00.001234', 'cattosjeck', 'travisscottcattosjeck', 1353),
  (1406, 'Dailymotion','2025-05-08 16:01:00.123400', 'cattosjeck', 'travisscottcattosjeck', 1353),
  
  (1407, 'Figma','2025-05-08 16:01:00.012340', 'KeepGoing','Matthew Baker', 1354),
  (1408, 'Sketch', '2025-05-08 16:01:00.012340','KeepGoing', 'Matthew Baker', 1354),
  (1409, 'InVision','2025-05-08 16:01:00.000000','KeepGoing2010', 'Matthew Baker', 1354),
  (1410, 'Marvel', '2025-05-08 16:01:00.000000','KeepGoing2010', 'Matthew Baker', 1354),
  
  (1411, 'NationalGeographic','2025-05-08 16:01:00.000000','AdventureAwaits1','Victoria Mitchell',1355),
  (1412, 'LonelyPlanet','2025-05-08 16:01:00.000000','AdventureAwaits1','Victoria Mitchell',1355),
  (1413, 'TripAdvisor', '2025-05-08 16:01:00.000000','AdventureAwaits1','Victoria Mitchell',1355),
  (1414, 'Expedia','2025-05-08 16:01:00.000000','AdventureAwaits1','Victoria Mitchell',1355),
  
  (1415, 'GuitarCenter','2025-05-08 16:01:00.000000','usedtoshopatald','KanyeWest',1356),
  (1416, 'MusicianFriend','2025-05-08 16:01:00.000000','usedtoshopatald','KanyeWest',1356),
  (1417, 'Sweetwater','2025-05-08 16:01:00.000000','usedtoshopatald','KanyeWest',1356),
  (1418, 'Reverb','2025-05-08 16:01:00.000000','usedtoshopatald','KanyeWest',1356),
  
  (1419, 'ArtStation','2025-05-08 16:01:00.000000','LifeIsBeautiful','Baker',1357),
  (1420, 'DeviantArt','2025-05-08 16:01:00.000000','LifeIsBeautiful','Baker',1357),
  (1421, '500px', '2025-05-08 16:01:00.000000','LifeIsBeautiful','Baker',1357),
  (1422, 'Pixiv','2025-05-08 16:01:00.000000','LifeIsBeautiful','Baker',1357);

DELETE FROM vault_entry
WHERE entryid = 1418;

UPDATE vault_entry
SET password = 'Test123',
    last_modified = '2025-05-08 16:30:00'
WHERE entryid = 1414;

DELETE FROM vault_entry
WHERE entryid = 1422;

UPDATE vault_entry
SET password = 'Test123',
    last_modified = '2025-05-08 16:30:00.000000'
WHERE entryid = 1422;


INSERT INTO login
  (login_id, ipadd, previous_login, userid)
VALUES
  ( 7, '203.0.113.45','2025-05-08 09:17:22.234567', 1340),
  ( 8, '198.51.100.67', '2025-05-08 09:20:13.345678', 1341),
  ( 9, '144.217.23.11', '2025-05-08 09:22:45.456789', 1342),
  (10, '3.125.12.56', '2025-05-08 09:25:38.567890', 1343),
  (11, '54.85.164.209','2025-05-08 09:28:10.678901', 1344),
  (12, '13.32.24.98', '2025-05-08 09:30:01.789012', 1345),
  (13, '45.33.82.123', '2025-05-08 09:33:55.890123', 1346),
  (14, '172.217.3.110', '2025-05-08 09:35:44.901234', 1347),
  (15, '13.107.21.200','2025-05-08 09:38:29.012345', 1348),
  (16, '185.199.110.153','2025-05-08 09:40:11.123456',1349),
  (17, '151.101.1.69', '2025-05-08 09:42:46.234567', 1350),
  (18, '104.16.133.229','2025-05-08 09:45:32.345678', 1351),
  (19, '23.235.33.229','2025-05-08 09:47:19.456789', 1352),
  (20, '34.194.164.123','2025-05-08 09:50:05.567890',1353),
  (21, '54.239.55.20', '2025-05-08 09:52:47.678901', 1354),
  (22, '52.88.104.32', '2025-05-08 09:55:22.789012', 1355),
  (23, '54.85.12.130','2025-05-08 09:57:11.890123', 1356),
  (24, '99.84.12.34',  '2025-05-08 10:00:00.901234', 1357),
  (25, '121.58.210.67','2025-05-08 10:02:45.012345',1358),
  (26, '182.75.23.4', '2025-05-08 10:05:32.123456',1359),
  (27, '203.145.36.18','2025-05-08 10:07:19.234567',1360),
  (28, '98.137.11.163','2025-05-08 10:10:05.345678',1361),
  (29, '157.240.1.35', '2025-05-08 10:12:50.456789',1362),
  (30, '203.120.223.10',  '2025-05-01 08:12:33.123456', 1),
  (31, '98.139.180.149',  '2025-05-01 09:14:22.234567', 1),
  (32, '192.0.2.44', '2025-05-01 10:16:11.345678', 1),
  (33, '203.187.200.15', '2025-05-01 11:18:55.456789', 100),
  (34, '88.198.45.122', '2025-05-02 12:20:44.567890', 100),
  (35,'147.75.58.245', '2025-05-02 13:22:33.678901', 1),
  (36,'103.21.244.12', '2025-05-03 14:24:22.789012', 1),
  (37, '35.196.78.90', '2025-05-02 07:11:21.112233', 1357),
  (38,'54.213.60.95', '2025-05-02 08:13:32.223344', 2),
  (39, '44.240.16.230', '2025-05-03 09:15:43.334455', 2),
  (40, '35.181.21.135', '2025-05-02 10:17:54.445566', 2),
  (41,'13.35.11.18', '2025-05-02 11:19:05.556677', 1358),
  (42, '54.239.123.44', '2025-05-02 12:21:16.667788', 1359),
  (43,'52.10.204.95', '2025-05-02 13:23:27.778899', 1358),
  (44, '18.205.93.89', '2025-05-03 06:10:10.010101', 1362),
  (45,'76.223.34.50', '2025-05-03 07:12:20.020202', 3),
  (46, '143.204.177.103', '2025-05-04 08:14:30.030303', 3),
  (47, '3.215.13.42', '2025-05-04 09:16:40.040404',3),
  (48,'52.58.24.110', '2025-05-04 10:18:50.050505', 3),
  (49, '99.83.190.76', '2025-05-04 11:20:00.060606', 3);

INSERT INTO forgot_request
 (requestid, requested_at, reset_token, sent_to, userid)
VALUES
 (1, '2025-05-07 15:36:31.191658', '739894', 'izumikamasaki@gmail.com', 2),
 (2, '2025-05-08 15:16:57.998175', '734556', 'izumikamasaki@gmail.com', 2),
 (3, '2025-05-08 15:17:02.344008', '385091', 'izumikamasaki@gmail.com', 2),
 (4, '2025-05-08 15:17:06.548689', '143285', 'izumikamasaki@gmail.com', 2),
 (5, '2025-05-08 15:17:14.547115', '828034', 'luke.murphy1988@gmail.com', 1341),
 (6, '2025-05-08 15:17:25.210645', '988194', 'grace.nelson1987@gmail.com', 1348),
 (7, '2025-05-08 15:17:34.242479', '364950', 'thisisnottravis@gmail.com', 1353),
 (8, '2025-05-08 15:17:41.552302', '155058', 'finch.found.secret@gmail.com', 1358),
 (9, '2025-05-08 15:17:47.541649', '361908', 'ez.urban.explorer@gmail.com', 1362),
 (10, '2025-05-08 15:17:54.343321', '642413', 'james@gmail.com', 39),
 (11, '2025-05-08 15:18:08.544683', '891812', 'finch.found.secret@gmail.com', 1358),
 (12, '2025-05-08 15:18:15.704750', '670301', 'finch.found.secret@gmail.com', 1358),
 (13, '2025-05-08 15:18:19.732890', '344282', 'finch.found.secret@gmail.com', 1358),
 (14, '2025-05-08 15:18:23.386840', '621823', 'finch.found.secret@gmail.com', 1358),
 (15, '2025-05-08 15:18:27.319587', '471163', 'finch.found.secret@gmail.com', 1358),
 (16, '2025-05-08 15:18:31.714831', '376442', 'finch.found.secret@gmail.com', 1358),
 (17, '2025-05-08 15:18:42.555011', '544983', 'finch.found.secret@gmail.com', 1358),
 (18, '2025-05-08 15:18:59.420897', '482891', 'sophia.martinez1993@gmail.com', 1344),
 (19, '2025-05-08 15:19:23.552553', '882195', 'sophia.martinez1993@gmail.com', 1344),
 (20, '2025-05-08 15:19:43.048980', '547631', 'eddie.r@gmail.com', 100);

select *
from user;

select * 
from login;

select *
from vault_entry;

select *
from forgot_request;
