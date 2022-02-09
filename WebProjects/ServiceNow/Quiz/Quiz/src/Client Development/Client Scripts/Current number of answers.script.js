function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
        return;
    }

    //Type appropriate comment here, and begin script below
    if (g_scratchpad.isThereCorrect === 1) {
        g_form.setReadOnly('correct');
    }

}