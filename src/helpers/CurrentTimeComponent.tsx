import React from 'react';

class CurrentTimeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formattedDate: '',
    };
  }

  componentDidMount() {
    this.updateFormattedDate();
    // Update the date every minute
    this.interval = setInterval(this.updateFormattedDate, 60000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateFormattedDate = () => {
    const currentDate = new Date();

    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const dayOfWeekIndex = currentDate.getDay();
    const monthIndex = currentDate.getMonth();

    const dayName = dayNames[dayOfWeekIndex];
    const monthName = monthNames[monthIndex];

    const dayOfMonth = currentDate.getDate();

    const formattedDate = `${dayName}, ${dayOfMonth} ${monthName}`;
    this.setState({ formattedDate });
  };

  render() {
    const { formattedDate } = this.state;

    return (
        <p className='lead'>{formattedDate}</p>
    );
  }
}

export default CurrentTimeComponent;
