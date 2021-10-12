	var currentStepNum = $('#checkout-progress').data('current-step');
	var progressBar = $('#checkout-progress');
for(let i = 1; i <= currentStepNum; i++)
{
	var nextStepNum = (i + 1);
	var currentStep = $('.step.step-' + i);
	var nextStep = $('.step.step-' + nextStepNum);
	$('.checkout-progress').removeClass('.step-' + i).addClass('.step-' + (i + 1));
	
	currentStep.removeClass('active').addClass('valid');
	currentStep.find('span').addClass('opaque');
	currentStep.find('.fa.fa-check').removeClass('opaque');
	
	nextStep.addClass('active');
	progressBar.removeAttr('class').addClass('step-' + i).data('current-step', i);

}

$('.btn-prev').on('click', function() {
	
	var currentStepNum = $('#checkout-progress').data('current-step');
	var prevStepNum = (currentStepNum - 1);
	var currentStep = $('.step.step-' + currentStepNum);
	var prevStep = $('.step.step-' + prevStepNum);
	var progressBar = $('#checkout-progress');
	$('.btn-next').removeClass('disabled');
	if(currentStepNum == 1) {
		return false;
	}
	if(prevStepNum == 1){
		$(this).addClass('disabled');
	}
	$('.checkout-progress').removeClass('.step-' + currentStepNum).addClass('.step-' + (prevStepNum));
	
	currentStep.removeClass('active');
	prevStep.find('span').removeClass('opaque');
	prevStep.find('.fa.fa-check').addClass('opaque');
	
	prevStep.addClass('active').removeClass('valid');
	progressBar.removeAttr('class').addClass('step-' + prevStepNum).data('current-step', prevStepNum);
});