function bonusTime (salary, bonus) {
  if (typeof salary === 'number' && typeof bonus === 'boolean') {
    if (bonus) {
      return '£' + (salary * 10);
    }
    return '£' + salary;
  }
  return 'Invalid inputs.';
}
