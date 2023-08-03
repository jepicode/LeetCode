class Calculator {
  
  /** 
   * @param {number} value
   */
  constructor(value) {
      this.tempValue = value;
  }

  /** 
   * @param {number} value
   * @return {Calculator}
   */
  add(value){
      this.tempValue += value;
      return this;
  }

  /** 
   * @param {number} value
   * @return {Calculator}
   */
  subtract(value){
      this.tempValue -= value;
      return this;
  }

  /** 
   * @param {number} value
   * @return {Calculator}
   */  
  multiply(value) {
      this.tempValue *= value;
      return this;
  }

  /** 
   * @param {number} value
   * @return {Calculator}
   */
  divide(value) {
      if (value === 0) {
        throw new Error('Division by zero is not allowed');
        }
      this.tempValue /= value;
      return this;
  }
  
  /** 
   * @param {number} value
   * @return {Calculator}
   */
  power(value) {
      this.tempValue = this.tempValue ** value;
      return this;
  }
    
  /** 
   * @return {number}
   */
  getResult() {
   return this.tempValue;
  }
}