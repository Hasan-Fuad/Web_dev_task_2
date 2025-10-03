$(document).ready(function() {
    function enhancedParallax() {
        var scrolled = $(window).scrollTop();
        var scrollPercent = scrolled / 100; 
        
        $('.hero-bg').css('transform', 'translateY(' + (scrolled * 0.5) + 'px)');
        
        function animatePeach(selector, baseTop, speedY, speedX, rotationSpeed, waveType, waveFreq) {
            var element = $(selector);
            var sway = waveType === 'sin' ? 
                Math.sin(scrollPercent * waveFreq) * speedX : 
                Math.cos(scrollPercent * waveFreq) * speedX; // this is for horizontal sways and stuff
            
            element.css('transform', 
                'translateY(' + (baseTop - scrolled * speedY) + 'vh) ' +
                'translateX(' + sway + 'px) ' +
                'rotate(' + (scrollPercent * rotationSpeed) + 'deg)'
            ); //and this is for vertical movement and rotation ^ v 
        }
        
        //  ancient origins section peaches
        animatePeach('.peach-float-1', 80, 0.8, 20, 0.1, 'sin', 0.01);
        animatePeach('.peach-float-2', 120, 0.4, 25, 0.15, 'sin', 0.01);
        animatePeach('.peach-float-3', 100, 0.2, 30, 0.3, 'sin', 0.02);
        animatePeach('.peach-float-4', 180, 0.6, 15, -0.08, 'cos', 0.008);
        animatePeach('.peach-float-5', 160, 0.5, 25, -0.1, 'cos', 0.008);
        animatePeach('.peach-float-6', 140, 0.3, 20, -0.25, 'cos', 0.015);
        animatePeach('.peach-float-7', 220, 0.45, 15, 0.2, 'sin', 0.012);
        animatePeach('.peach-float-8', 200, 0.7, 10, 0.12, 'cos', 0.009);
        animatePeach('.peach-float-9', 90, 0.15, 35, 0.4, 'sin', 0.025);
        animatePeach('.peach-float-10', 130, 0.25, 25, -0.35, 'cos', 0.018);
        animatePeach('.peach-float-11', 190, 0.35, 20, 0.3, 'sin', 0.02);
        animatePeach('.peach-float-12', 240, 0.2, 30, -0.4, 'cos', 0.022);
        
        // journey to europe section peaches
        animatePeach('.peach-float-13', 260, 0.7, 18, 0.09, 'sin', 0.013);
        animatePeach('.peach-float-14', 280, 0.4, 22, 0.18, 'cos', 0.011);
        animatePeach('.peach-float-15', 270, 0.25, 28, 0.35, 'sin', 0.019);
        animatePeach('.peach-float-16', 290, 0.45, 16, -0.12, 'cos', 0.014);
        animatePeach('.peach-float-17', 265, 0.18, 32, 0.42, 'sin', 0.024);
        animatePeach('.peach-float-18', 310, 0.65, 14, -0.07, 'cos', 0.007);
        animatePeach('.peach-float-19', 295, 0.22, 26, 0.38, 'sin', 0.021);
        animatePeach('.peach-float-20', 320, 0.42, 20, -0.16, 'cos', 0.016);
        
        // new world adventure section peaches
        animatePeach('.peach-float-21', 340, 0.75, 17, 0.11, 'sin', 0.012);
        animatePeach('.peach-float-22', 360, 0.38, 24, 0.19, 'cos', 0.010);
        animatePeach('.peach-float-23', 350, 0.28, 29, 0.33, 'sin', 0.023);
        animatePeach('.peach-float-24', 380, 0.48, 18, -0.14, 'cos', 0.017);
        animatePeach('.peach-float-25', 370, 0.68, 15, 0.08, 'sin', 0.008);
        animatePeach('.peach-float-26', 390, 0.24, 27, 0.36, 'cos', 0.020);
        animatePeach('.peach-float-27', 355, 0.32, 21, -0.28, 'sin', 0.018);
        animatePeach('.peach-float-28', 375, 0.19, 33, 0.44, 'cos', 0.026);
        
        // modern peach culture section peaches
        animatePeach('.peach-float-29', 410, 0.72, 19, 0.10, 'sin', 0.011);
        animatePeach('.peach-float-30', 430, 0.41, 23, 0.17, 'cos', 0.015);
        animatePeach('.peach-float-31', 420, 0.26, 31, 0.37, 'sin', 0.022);
        animatePeach('.peach-float-32', 450, 0.46, 17, -0.13, 'cos', 0.013);
        animatePeach('.peach-float-33', 440, 0.21, 28, 0.39, 'sin', 0.025);
        animatePeach('.peach-float-34', 460, 0.69, 16, -0.09, 'cos', 0.009);
        animatePeach('.peach-float-35', 425, 0.29, 25, -0.31, 'sin', 0.019);
        animatePeach('.peach-float-36', 455, 0.17, 34, 0.41, 'cos', 0.027);
        
        // special parallax effect for the big finale peach
        var finaleSection = $('.finale-section');
        var windowHeight = $(window).height();
        var finaleTop = finaleSection.offset().top;
        var finaleVisible = (scrolled + windowHeight > finaleTop) && (scrolled < finaleTop + finaleSection.height());
        
        if (finaleVisible) {
            var finaleProgress = (scrolled + windowHeight - finaleTop) / (windowHeight + finaleSection.height());
            finaleProgress = Math.max(0, Math.min(1, finaleProgress));
            
            
            $('.big-peach').css('transform', 
                'translateY(' + (Math.sin(scrollPercent * 0.02) * 10) + 'px) ' +
                'rotate(' + (scrollPercent * 0.05) + 'deg) ' +
                'scale(' + (1 + Math.sin(scrollPercent * 0.015) * 0.05) + ')'
            );
        }
    }
    
    
    let ticking = false;
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(enhancedParallax);
            ticking = true;
        }
    }
    
    function finishTick() {
        ticking = false;
    }
    
    function handleScroll() {
        requestTick();
        setTimeout(finishTick, 16); 
    }
    
    
    $(window).scroll(handleScroll);
    
    
    enhancedParallax();
});