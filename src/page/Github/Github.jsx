import React, { useEffect, useState } from 'react'
import FilterArea from '../../component/Github/FilterArea';
import { notify } from 'react-notify-toast';
import RenderGitCard from '../../component/Github/RenderGitCard';
import { apiClient } from '../../config/apiClient';
import { useToggle } from 'react-use'
import { repo } from '../../config/endPoints';

export default function Github() {
    const [result, setResult] = useState([]);
    const [loading, setloading] = useToggle(false)

    const fetchData = async (updateParams) => {
        setloading(true)
        const githubApiResult = await apiClient(repo + updateParams)
        if (githubApiResult?.error) {
            notify.show(githubApiResult.message, 'error');
        } else {
            setResult(githubApiResult.data);
        }
        console.log(githubApiResult)
        setloading(false)
    }

    return (
        <>
            <FilterArea fetchData={fetchData} />
            <RenderGitCard data={result} />
        </>
    )
}
