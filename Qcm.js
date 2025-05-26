document.getElementById('imageUpload').addEventListener('change', function(e) {
   
    
    const digitElement = document.getElementById('digit');
    const textElement = document.getElementById('text');
    
    digitElement.classList.remove('animate-digit');
    textElement.classList.remove('animate-text');
    
    void digitElement.offsetWidth;
    void textElement.offsetWidth;
 
    digitElement.textContent = '6';
    textElement.textContent = 'Six';
    
    digitElement.classList.add('animate-digit');
    textElement.classList.add('animate-text');
   
});
