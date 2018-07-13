import React, {Component} from 'react';
import "./Videos.css"

class HelperText extends Component {

    state = {};

    render() {
        return (

            <textarea style={{background: "#d5fdff", color: "black"}}
                      className="output-text-scroll"
                      readOnly="readOnly">
                            Basic Concepts before starting C:
1. Variables & Primitive Data Type:
  - Most/all variables used are usually defined at the top of the function; a c file will often not compile correctly otherwise.
  - Many types of variables exist, such as ints, doubles, floats, chars, and pointer variables.

  Integers (int):
    - 32 bits
    - Stores an integer from -2,147,483,648 to 2,147,483,647
    - Can be declared as unsigned, in which the range of integers that can be stored is from 0 to 4,294,967,295

  Doubles (double):
    - 64 bits
    - Stores a decimal number between 2.3E-308 to 1.7E+308 with the precision to 15 decimal places.

  Character (char)
    - 8 bits
    - Stores an ASCII character that corresponds to a value between 0 and 255. (man ascii in terminal for more info)
                        </textarea>

        );
    }
}

export default HelperText;
