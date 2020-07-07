import React from 'react'
import { Grid } from '@material-ui/core'
// import { fade, makeStyles } from '@material-ui/core/styles';
// import SearchIcon from '@material-ui/icons/Search';
import SearchBar from '../components/SearchBar'
import VideoDetail from '../components/VideoDetail'
import VideoList from '../components/VideoList'


// const useStyles = makeStyles((theme) => ({
    
//     search: {
//       position: 'relative',
//       borderRadius: theme.shape.borderRadius,
//       backgroundColor: fade(theme.palette.common.white, 0.15),
//       '&:hover': {
//         backgroundColor: fade(theme.palette.common.white, 0.25),
//       },
//       marginRight: theme.spacing(2),
//       marginLeft: 0,
//       width: '100%',
//       [theme.breakpoints.up('sm')]: {
//         marginLeft: theme.spacing(3),
//         width: 'auto',
//       },
//     },
//     searchIcon: {
//       padding: theme.spacing(0, 2),
//       height: '100%',
//       position: 'absolute',
//       pointerEvents: 'none',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     inputRoot: {
//       color: 'inherit',
//     },
//     inputInput: {
//       padding: theme.spacing(1, 1, 1, 0),
//       // vertical padding + font size from searchIcon
//       paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
//       transition: theme.transitions.create('width'),
//       width: '100%',
//       [theme.breakpoints.up('md')]: {
//         width: '20ch',
//       }
//     }
//   }))

const REACT_APP_YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY

class BYOT extends React.Component {

    // const classes = useStyles()

    state = {
        videos: [],
        selectedVideo: null,
        searchTerm: ''
    }

    handleSubmit = (searchTerm) => {
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=${searchTerm}&key=${REACT_APP_YOUTUBE_API_KEY}`)
            .then(res => res.json())
            .then(data => {
                this.setState({ videos: data.items, selectedVideo: data.items[0], searchTerm: ''})
                console.log(data.items)
            })
        }
           
    
        
    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video })
    }
    
    render() {
        // console.log(this.state.selectedVideo)
        return(
            <div className='byot-background'>
                <Grid justify='center' container spacing={0}>
                    <Grid item xs={12}>
                        <Grid container spacing={10}>
                            <h1 className='byot-title'>Brew Your Own Tea</h1>
                            <Grid item sm={12} style={{ padding: '40px' }}>
                                <SearchBar  onSubmit={this.handleSubmit} />
                            </Grid>
                            <Grid item xs={8}>
                                <VideoDetail video={this.state.selectedVideo} addPopVideo={this.props.addPopVideo}/>
                            </Grid>
                            <Grid item xs={4}>
                                <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default BYOT