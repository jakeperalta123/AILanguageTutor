if ('webkitSpeechRecognition' in window) {
    var recognition = new webkitSpeechRecognition();
    var resultElement = document.getElementById('result');

    recognition.onresult = function(event) {
        var result = event.results[0][0].transcript;
        resultElement.textContent = result; 
    };

    document.getElementById('startButton').addEventListener('click', function() {
        resultElement.textContent = 'Listening...';
        recognition.start();
      });
} else {
    alert('Web Speech API is not supported in this browser.');
}