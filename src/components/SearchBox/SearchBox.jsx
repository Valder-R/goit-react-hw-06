import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";
import { useDispatch } from "react-redux";

export default function SearchBox() {
    const dispatch = useDispatch();
    return (
        <div>
            <p>Find contacts by name</p>
            <input type="text" name="filter" onChange={(e) => {
                dispatch(changeFilter(e.target.value));
            }}/>
        </div>
    )
}