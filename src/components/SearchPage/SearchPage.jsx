import SearchBar from "@components/SearchBar/SearchBar";
import styles from './styles.module.scss'

function SearchPage() {
    const {container} = styles
    return (
        <div className={container}>
            <h2>What Are You Looking For?</h2>
            <SearchBar />
            <div>View All Categories</div>
        </div>
    );
}

export default SearchPage;