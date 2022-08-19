import { Pagination, Box } from '@mui/material';
import Card from '../components/MediumCard';

const Article = () => {
    return (
        <div className="Article">
            <div className="Article-title">
                <h1 className="title-Main">Article</h1>
                <h3 className="title-Sub">HY-BLOCK의 아티클을 소개합니다</h3>
            </div>
            <div className="Article-subNavigation">
                <div className="subNavigation-wrap1">
                    <button className="wrap1-research">Research</button>
                </div>
                <div className="subNavigation-wrap2">
                    <button className="wrap2-development">Development</button>
                </div>
            </div>
            <div className="Article-container">
                <div className="container__wrapper">
                    <ul className="wrapper-items">
                        <Card
                            img='https://picsum.photos/id/54/256/192'
                            title='Mastering Bitcoin Chapter 4'
                            author='Kevin Hong'
                            date='Mar 13'
                            path='/'
                        />
                        <Card
                            img='https://picsum.photos/id/53/256/192'
                            title='Mastering Bitcoin Chapter 3'
                            author='Jaebin'
                            date='May 15'
                            path='/'
                        />
                        <Card
                            img='https://picsum.photos/id/52/256/192'
                            title='Mastering Bitcoin Chapter 2'
                            author='Tae Uk'
                            date='June 1'
                            path='/'
                    />
                    </ul>
                    <ul className="wrapper-items">
                        <Card
                            img='https://picsum.photos/id/51/256/192'
                            title='Mastering Bitcoin Chapter 1'
                            author='Shuvro'
                            date='Apr 22'
                            path='/'
                        />
                        <Card
                            img='https://picsum.photos/id/50/256/192'
                            title='Mastering Ethereum Chapter 7'
                            author='Flat_water'
                            date='Aug 5'
                            path='/'
                        />
                        <Card
                            img='https://picsum.photos/id/49/256/192'
                            title='Mastering Ethereum Chapter 6'
                            author='JaeMin'
                            date='Jan 11'
                            path='/'
                        />
                    </ul>
                </div> 
            </div>
            <Box display="flex" justifyContent="center">
                <Pagination count={12} boundaryCount={0} showFirstButton showLastButton />
            </Box>
    </div>
    );
};

export default Article;