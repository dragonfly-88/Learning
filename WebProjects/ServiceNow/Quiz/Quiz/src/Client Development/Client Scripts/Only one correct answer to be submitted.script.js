function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
        return;
    }
    if (g_scratchpad.isThereCorrect === 1) {
        g_form.setReadOnly('correct');
		g_form.showFieldMsg('correct', 'Already has a correct answer');
    }
    //Type appropriate comment here, and begin script below

}