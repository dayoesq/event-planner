import Button from '../../components/ui/Button';

import classes from './EventSearch.module.css';

const EventSearch: React.FC = () => {
  return (
    <form className={classes.form}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year">
            <option value="2020">2020</option>
            <option value="2021">2021</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Year</label>
          <select id="month">
            <option value="1">Jan</option>
            <option value="2">Feb</option>
            <option value="3">Mar</option>
            <option value="4">Apr</option>
            <option value="5">May</option>
            <option value="6">Jun</option>
            <option value="7">Jul</option>
            <option value="8">Aug</option>
            <option value="9">Sep</option>
            <option value="10">Oct</option>
            <option value="11">Nov</option>
            <option value="12">Dec</option>
          </select>
        </div>
      </div>
      <Button>Search</Button>
    </form>
  );
};

export default EventSearch;