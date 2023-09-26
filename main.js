function applyDiscount(productId) {
    const discountCodeInput = document.getElementById("discountCode" + productId);
    const quantitySpan = document.getElementById("quantity" + productId);
    
    const discountCode = discountCodeInput.value;
    
    
    
    if (discountCode === "SAVE10") {
        
        const originalPrice = 50;
        const discountedPrice = originalPrice * 0.9; 
        
        
        quantitySpan.textContent = parseInt(quantitySpan.textContent) + 1;
        
    }
}