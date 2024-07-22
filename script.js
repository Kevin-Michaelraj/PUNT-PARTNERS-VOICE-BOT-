document.getElementById('startButton').addEventListener('click', async () => {
    const apiKey = document.getElementById('apiKey').value;
    if (!apiKey) {
        alert('Please enter your OpenAI API Key');
        return;
    }


    try {
        const response = await fetch('/api/start', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ apiKey })
        });
        
        const result = await response.json();
        console.log('Backend response:', result);

        if (response.ok) {
            document.getElementById('startButton').disabled = true;
            document.getElementById('stopButton').disabled = false;
        } else {
            alert('Error starting the voice bot');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error communicating with the backend');
    }
});

document.getElementById('stopButton').addEventListener('click', async () => {
    try {
        const response = await fetch('/api/stop', { method: 'POST' });

        if (response.ok) {
            document.getElementById('startButton').disabled = false;
            document.getElementById('stopButton').disabled = true;
        } else {
            alert('Error stopping the voice bot');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error communicating with the backend');
    }
});
