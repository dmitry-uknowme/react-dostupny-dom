import axios from 'axios';
import React, { useState, Component, useRef } from 'react';
// const Test = () => {
//   const [formData, setFormData] = useState('');
//   console.log(formData);

//   const handleUpload = (e) => {
//     setFormData(e.target.files[0]);
//     console.log(formData);
//     axios.post('http://localhost:9000/upload', formData).then((res) => {
//       console.log(res);
//     });
//   };
//   return (
//     <div>
//       <input type="file" onChange={handleUpload} />
//     </div>
//   );
// };

// export default Test;

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadStatus: false,
    };
    this.handleUploadImage = this.handleUploadImage.bind(this);
  }

  handleUploadImage(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.append('file', this.uploadInput.files[0]);
    data.append('filename', this.fileName.value);

    axios
      .post('http://localhost:9000/upload', data)
      .then(function (response) {
        this.setState({
          imageURL: `http://localhost:9000/upload/${data.file}`,
          uploadStatus: true,
        });
        console.log(this.state);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <h2> File upload </h2>
        <div className="container">
          <form onSubmit={this.handleUpload}>
            <div className="form-group">
              <input
                className="form-control"
                ref={(ref) => {
                  this.uploadInput = ref;
                }}
                type="file"
              />
            </div>

            <div className="form-group">
              {/* <input
                className="form-control"
                ref={(ref) => {
                  this.fileName = ref;
                }}
                type="text"
                placeholder="Optional name for the file"
              /> */}
            </div>

            <button className="btn btn-success" type="submit">
              Upload
            </button>
          </form>
          <img
            src="https://res.cloudinary.com/dxlyableo/image/upload/v1611792091/samples/animals/kitten-playing.gif"
            alt=""
          />
        </div>
      </div>
    );
  }
}

export default Test;
