<!-- Animal Quiz Language Change With Local Storage -->
  
function mylanguage() {  
  if($('language1').html() == 'eng') {

$('Alpaca').html('<ben>আলপাকা');
$('Anteater').html('<ben>পিপীলিকাভুক');
$('Baboon').html('<ben>বেবুন');
$('Badger').html('<ben>ব্যাজার');
$('Bat').html('<ben>বাদুড়');
$('Barasingha').html('<ben>বারশিঙ্গা');
$('Bear').html('<ben>ভালুক');
$('beaver').html('<ben>বীবর');
$('Bison').html('<ben>বুনো মোষ');
$('Buffalo').html('<ben>মহিষ');
$('Cat').html('<ben>বিড়াল');
$('Chameleon').html('<ben>গিরগিটি');
$('Cheetah').html('<ben>চিতা');
$('Chimpanzee').html('<ben>শিম্পাঞ্জি');
$('Cow').html('<ben>গোরু');
$('Crocodile').html('<ben>কুমির');
$('Deer').html('<ben>হরিণ');
$('Dog').html('<ben>কুকুর');
$('Dolphin').html('<ben>শুশুক');
$('Donkey').html('<ben>গাধা');
$('Elephant').html('<ben>হাতি');
$('Fox').html('<ben>খেঁকশিয়াল');
$('Gecko').html('<ben>গেকো');
$('Giraffe').html('<ben>জিরাফ');
$('Goat').html('<ben>ছাগল');
$('Hippopotamus').html('<ben>জলহস্তী');
$('Horse').html('<ben>ঘোড়া');
$('Hyena').html('<ben>হায়না');
$('Iguana').html('<ben>গোসাপ');
$('Jackal').html('<ben>শিয়াল');
$('Kangaroo').html('<ben>ক্যাঙ্গারু');
$('Langur').html('<ben>লেঙ্গুর');
$('Lemur').html('<ben>লেমুর');
$('Lion').html('<ben>সিংহ');
$('Lizard').html('<ben>টিকটিকি');
$('Lynx').html('<ben>বনবিড়াল');
$('Mole').html('<ben>ছুঁচো');
$('Mongoose').html('<ben>নেউল');
$('Monkey').html('<ben>বানর');
$('Otter').html('<ben>ভোঁদড়');
$('Panda').html('<ben>পান্ডা');
$('Pangolin').html('<ben>বনরুই');
$('Pig').html('<ben>শূকর');
$('Polecat').html('<ben>খট্টাশ');
$('Porcupine').html('<ben>শজারু');
$('Rabbit').html('<ben>খরগোশ');
$('Raccoon').html('<ben>র‍্যাকুন');
$('Rat').html('<ben>ইঁদুর');
$('Rhinoceros').html('<ben>গণ্ডার');
$('Shark').html('<ben>হাঙ্গর');
$('Sheep').html('<ben>ভেড়া');
$('Snail').html('<ben>শামুক');
$('Snake').html('<ben>সাপ');
$('Squirrel').html('<ben>কাঠবিড়ালি');
$('Tiger').html('<ben>বাঘ');
$('Tortoise').html('<ben>কচ্ছপ');
$('Whale').html('<ben>তিমি');
$('Wolf').html('<ben>নেকড়ে');
$('Zebra').html('<ben>জেব্রা');


$('cl').html('GO TO<br/>ENGLISH');
$('touchoption').html('<ben>সঠিক অপশনটি টাচ করুন !');
$('CorrectAnswer').html('<ben>সঠিক উত্তর !');
$('language1').html('bng');sessionStorage.setItem('cl','t');

} else {

$('Alpaca').html('Alpaca');
$('Anteater').html('Anteater');
$('Baboon').html('Baboon');
$('Badger').html('Badger');
$('Bat').html('Bat');
$('Barasingha').html('Barasingha');
$('Bear').html('Bear');
$('Beaver').html('Beaver');
$('Bison').html('Bison');
$('Buffalo').html('Buffalo');
$('Cat').html('Cat');
$('Chameleon').html('Chameleon');
$('Cheetah').html('Cheetah');
$('Chimpanzee').html('Chimpanzee');
$('Cow').html('Cow');
$('Crocodile').html('Crocodile');
$('Deer').html('Deer');
$('Dog').html('Dog');
$('Dolphin').html('Dolphin');
$('Donkey').html('Donkey');
$('Elephant').html('Elephant');
$('Fox').html('Fox');
$('Gecko').html('Gecko');
$('Giraffe').html('Giraffe');
$('Goat').html('Goat');
$('Hippopotamus').html('Hippopotamus');
$('Horse').html('Horse');
$('Hyena').html('Hyena');
$('Iguana').html('Iguana');
$('Jackal').html('Jackal');
$('Kangaroo').html('Kangaroo');
$('Langur').html('Langur');
$('Lemur').html('Lemur');
$('Lion').html('Lion');
$('Lizard').html('Lizard');
$('Lynx').html('Lynx');
$('Mole').html('Mole');
$('Mongoose').html('Mongoose');
$('Monkey').html('Monkey');
$('Otter').html('Otter');
$('Panda').html('Panda');
$('Pangolin').html('Pangolin');
$('Pig').html('Pig');
$('Polecat').html('Polecat');
$('Porcupine').html('Porcupine');
$('Rabbit').html('Rabbit');
$('Raccoon').html('Raccoon');
$('Rat').html('Rat');
$('Rhinoceros').html('Rhinoceros');
$('Shark').html('Shark');
$('Sheep').html('Sheep');
$('Snail').html('Snail');
$('Snake').html('Snake');
$('Squirrel').html('Squirrel');
$('Tiger').html('Tiger');
$('Tortoise').html('Tortoise');
$('Whale').html('Whale');
$('Wolf').html('Wolf');
$('Zebra').html('Zebra');


$('cl').html('GO TO<br/>BENGALI');
$('touchoption').html('Touch The Correct Option !');
$('CorrectAnswer').html('Correct Answer !');
$('language1').html('eng');sessionStorage.removeItem('cl');
}}