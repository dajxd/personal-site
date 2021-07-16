$(document).ready(function () {
    var input = document.getElementById("answer");
    input.value = "";
    var jqfreq = $('#freq');
    var score = 0;
    var attempts = 0;
    var audioCtx = new(window.AudioContext || window.webkitAudioContext)();
    var myAudio = document.getElementById('audio');
    var biquadFilter = audioCtx.createBiquadFilter();
    var gainNode = audioCtx.createGain();
    var source = audioCtx.createMediaElementSource(myAudio);
    source.connect(biquadFilter);
    biquadFilter.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    var freqs = [80, 100, 150, 200, 250, 300, 350, 400, 500, 600, 700, 800, 900, 1000, 1200, 2500, 1800, 2000, 2500, 3000, 3500, 4000, 5000, 6000, 7000, 8000, 10000];
    var freq = 0;
    var perfectanswers = [];
    var correctanswers = [];
    var fader = function (target) {
        $(target).animate({
            opacity: 1
        }, 250, function () {
            $(target).animate({
                opacity: 0
            }, 2500, function () {})
        });
    };

    function getNewFreq() {
        attempts = 0;
        input.value = "";
        perfectanswers = [];
        correctanswers = [];
        freq = freqs[Math.ceil(getRandomInt(0, 27))];
        //        console.log(freq);
        var pstart = freq * 0.9;
        var pend = freq * 1.1;
        while (pstart < pend) {
            perfectanswers.push(pstart);
            pstart += 1;
        }
        var start = freq * 0.8;
        var end = freq * 1.4;
        while (start < end) {
            correctanswers.push(start);
            start += 1;
        }
    }
    getNewFreq();
    window.checkAnswer = function () {
        updateTries();
        var answer = document.getElementById("answer");
        if (answer.value == "" || answer.value == null) {
            fader("#not")
        }
        else if (isNaN(parseInt(answer.value))) {
            fader("#nan")
        }
        else {
            answer = parseInt(answer.value);
            var correct = false;
            var perfect = false;

            function finalFunc(correct, perfect) {
                if (perfect) {
                    score += 10;
                    updateScore("#perfect");
                    getNewFreq();
                    setAudio();
                }
                else if (correct) {
                    score += 5;
                    updateScore("#good");
                    getNewFreq();
                    setAudio();
                }
                else {
                    if (answer < freq) {
                        fader("#low")
                    }
                    else {
                        fader("#high")
                    }
                }
            }

            function checkPerfect(answer) {
                for (var x in perfectanswers) {
                    if (perfectanswers[x] == answer) {
                        perfect = true;
                    }
                }
                checkCorrect(answer, perfect);
            }

            function checkCorrect(answer, perfect) {
                for (var y in correctanswers) {
                    if (correctanswers[y] == answer) {
                        correct = true;
                    }
                }
                finalFunc(correct, perfect);
            }
            checkPerfect(answer);
        }
    };
    window.giveUp = function () {
        jqfreq.text("The boost was at " + freq);
        $('#give').animate({
            backgroundColor: "#aa0000"
        }, 500, function () {

            jqfreq.css('zIndex', 10);
            jqfreq.animate({
                opacity: 1
            }, 250, function () {
                jqfreq.animate({
                    opacity: 0
                }, 2500, function () {
                    jqfreq.css('zIndex', 0);
                })
            });
            $('#quit').animate({
                opacity: 1
            }, 250, function () {
                $('#quit').animate({
                    opacity: 0
                }, 2500, function () {})
            });
        });
        getNewFreq();
        setAudio();
    };
    

    function updateScore(phrase) {
        var scorediv = document.getElementById('score');

        jqfreq.text("The boost was at " + freq);
        jqfreq.css('zIndex', 10);
        jqfreq.animate({
            opacity: 1
        }, 250, function () {
            jqfreq.animate({
                opacity: 0
            }, 2500, function () {
                jqfreq.css('zIndex', 0);
            })
        });
        if (score > 0) {
            $(phrase).animate({
                opacity: 1
            }, 250, function () {
                scorediv.innerHTML = score;
                $(phrase).animate({
                    opacity: 0
                }, 2500, function () {})
            });
        }
    }

    function updateTries() {
        var triestext = document.getElementById('tries');
        attempts += 1;
        $(triestext).animate({
            opacity: 0
        }, 250, function () {
            triestext.innerHTML = attempts;
            $(triestext).animate({
                opacity: 1
            }, 250, function () {})
        });
    }

    function setAudio() {
        biquadFilter.gain.value = 1;
        biquadFilter.type = "peaking";
        biquadFilter.frequency.value = freq;
        biquadFilter.gain.value = 25;
        $("#give").animate({
            backgroundColor: "#006400"
        }, 1500);
    }
    window.rePlay = function () {
        // For some reason this makes it happier in FF:
        // source = audioCtx.createMediaElementSource(myAudio);
        // source.connect(biquadFilter);
        // biquadFilter.connect(gainNode);
        // gainNode.connect(audioCtx.destination);
        document.getElementById("audio1").play();
        console.log('played 1');
        setTimeout(function () {
            document.getElementById("audio").play();

            console.log('played 2');
        }, 3000);
    };
    setAudio();
});