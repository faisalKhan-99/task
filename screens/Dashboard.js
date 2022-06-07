import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TextInput } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import axios from 'axios';
import {
    LineChart
} from "react-native-chart-kit";

const Dashboard = ({ navigation, route }) => {

    useEffect(() => {
        fetchSkillData();
    },[]);


    //for chart dummy data 
    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43],
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                strokeWidth: 3 // optional
            }
        ],
        // legend: ["Rainy Days"] // optional
    };
    //all customizations done here for chart
    const chartConfig = {
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };



    const [bodyScore,setBodyScore] = useState(0)
    const [vocalScore,setVocalScore] = useState(0)
    const[wordPower,setWordPower] = useState(0)
    const [user_id, setUserID] = useState(3);

    const fetchSkillData = () => {
        axios({
            method: 'POST',
            url: 'https://app.uspeek.imaxims.com/v1/dashboard',
            data: {
                user_id: user_id
            },
            headers: {
                // "Authorization": "Bearer",
                "Accept": "application/json",
                "Content-type": "application/json"
            }
        }).then(function (response) {
            // console.log("Res", JSON.parse(response.data.data.wordPowerScore))
            //error in vocalToneScore(returning null instead of number)----------!!!!!!!!
            setBodyScore(JSON.parse(response.data.data.bodyLangScore))
            setWordPower(JSON.parse(response.data.data.wordPowerScore))
        }).catch(function (error) {
            console.log("Err", error)
        })
    }

    return (
        <View style={styles.main}>
            <LineChart
                data={data}
                width={Dimensions.get("window").width}
                height={230}
                verticalLabelRotation={30}
                chartConfig={chartConfig}
                withVerticalLines={false}
                color={'black'}
                // yAxisLabel="VideoPlayback1"
                // xAxisLabel="Overall"
                bezier
                fromZero={true}
            />
            <View style={styles.loaders}>
                {/*Improvement to be done would be to map the values(map.item) 
                     for these circular 
                     progress bars and make use of a single component with
                different mapped values */}
                <View style={styles.progressview}>
                    <Text style={styles.progressText}>Body Languagee</Text>
                    <CircularProgress
                        value={bodyScore}
                        activeStrokeWidth={15}
                        inActiveStrokeWidth={15}
                        progressValueColor={'black'}
                        duration={5000}
                        radius={45}
                    />
                </View>

                <View style={styles.progressview}>
                    <Text style={styles.progressText}>Word Power</Text>
                    <CircularProgress
                        value={wordPower}
                        activeStrokeWidth={15}
                        inActiveStrokeWidth={15}
                        progressValueColor={'black'}
                        duration={1000}
                        radius={45}
                    />
                </View>
                <View style={styles.progressview}>
                    <Text style={styles.progressText}>Vocal</Text>
                    <CircularProgress
                        value={90}
                        activeStrokeWidth={15}
                        inActiveStrokeWidth={15}
                        progressValueColor={'black'}
                        duration={5000}
                        radius={45}

                    />
                </View>

            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    main: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    progressView: { flexDirection: 'column', borderWidth: 1, padding: 5, borderRadius: 20, borderColor: '#d3d3d3' },
    progressText: { alignSelf: 'center', marginBottom: 5 },
    loaders: { flexDirection: 'row', width: '90%', justifyContent: 'space-between' }

})
export default Dashboard;